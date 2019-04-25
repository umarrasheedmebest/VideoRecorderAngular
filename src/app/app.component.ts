
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import * as RecordRTC from 'recordrtc';
import { DeviceDetectorService } from 'ngx-device-detector';

//let RecordRTC = require('recordrtc/RecordRTC.min');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  private stream: MediaStream;
  private recordRTC: any;
  audioVideoWebMURL: any;
  @ViewChild('video') video;

  constructor(private deviceService: DeviceDetectorService) {
    // Do stuff
  }

  ngAfterViewInit() {
    // set the initial state of the video
    let video: HTMLVideoElement = this.video.nativeElement;
    video.muted = false;
    video.controls = true;
    video.autoplay = false;
  }

  toggleControls() {
    let video: HTMLVideoElement = this.video.nativeElement;
    video.muted = !video.muted;
    video.controls = !video.controls;
    video.autoplay = !video.autoplay;
  }

  successCallback(stream: MediaStream) {
    var options = {
      mimeType: 'video/webm', // or video/webm\;codecs=h264 or video/webm\;codecs=vp9
      audioBitsPerSecond: 8000000000,
      videoBitsPerSecond: 8000000000,
      bitsPerSecond: 8000000000 // if this line is provided, skip above two
    };
    this.stream = stream;
    this.recordRTC = RecordRTC(stream, options);
    this.recordRTC.startRecording();
    let video: HTMLVideoElement = this.video.nativeElement;
    video.srcObject = stream;
    // video.src = window.URL.createObjectURL(stream);
    this.toggleControls();
  }

  errorCallback() {
    //handle error here
  }

  processVideo(audioVideoWebMURL) {
    let video: HTMLVideoElement = this.video.nativeElement;
    let recordRTC = this.recordRTC;
    video.src = video.srcObject = null;
    video.src = window.URL.createObjectURL(this.recordRTC.getBlob());
    // video.src = audioVideoWebMURL;
    this.toggleControls();
    var recordedBlob = recordRTC.getBlob();
    console.log('blob', recordedBlob);
    recordRTC.getDataURL(function (dataURL) { });
  }

  startRecording() {
    let mediaConstraints: any;
    console.log(this.deviceService.isMobile());
    if(this.deviceService.isMobile()) {
      mediaConstraints = {
        type: 'video',
        video: {
          width: 320,
          height: 240
        }, audio: true
      };
    } else {
      mediaConstraints = {
        type: 'video',
        video: {
          width: 700,
          height: 500
        }, audio: true
      };
    }
   
    navigator.mediaDevices
      .getUserMedia(mediaConstraints)
      .then(this.successCallback.bind(this), this.errorCallback.bind(this));
  }

  stopRecording() {
    let recordRTC = this.recordRTC;
    recordRTC.stopRecording(this.processVideo.bind(this));
    let stream = this.stream;
    stream.getAudioTracks().forEach(track => track.stop());
    stream.getVideoTracks().forEach(track => track.stop());
  }

  download() {
    this.recordRTC.save('video.webm');
  }

  playVideo() {
    let video: HTMLVideoElement = this.video.nativeElement;
    video.play();
  }

  pauseVideo() {
    let video: HTMLVideoElement = this.video.nativeElement;
    video.pause();
  }

  calculateTimeDuration(secs) {
    let hr: any = Math.floor(secs / 3600);
    let min: any = Math.floor((secs - (hr * 3600)) / 60);
    let sec: any = Math.floor(secs - (hr * 3600) - (min * 60));
    if (min < 10) {
      min = "0" + min;
    }
    if (sec < 10) {
      sec = "0" + sec;
    }
    if (hr <= 0) {
      return min + ':' + sec;
    }
    return hr + ':' + min + ':' + sec;
  }
}

