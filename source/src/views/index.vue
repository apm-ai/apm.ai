<template>
  <div class="index">
        <div class="header">
            <div class="header-container container"> 
                <a href="/" class="header-logo title-large" style=" color: #fff;text-decoration: none;font-size: 26px;">
                    APM.AI
                </a>
                <nav class="header-nav list-inline">
                    <ul class="list-inline">
                        <li class="list-inline-item"><a class="header__link" href="https://github.com/koalatracing/koala">Download</a></li>
                        <li class="list-inline-item"><a class="header__link">Docs</a></li>
                        <li class="list-inline-item demo"><a class="header__link">Demo</a></li> 
                        <li class="list-inline-item github-logo"><a class="header__link" href="https://github.com/koalatracing/koala">  <img style="max-height:22px;color:#fff;margin-bottom:-4px" src="../assets/images/github.svg"></a></li>
                    </ul>
                </nav>
            </div> 
            <div style="text-align:center;padding-top:20px;padding-bottom:10px">
                <p class="title-large" style="color:#fff;font-size:26px;font-weight:bold;line-height:20px">Next-generation OpenSource APM</p>
                <p class="sub-title" style="font-size:18px">Blends APM with AI to bring you modern monitoring & analytics</p>
            </div> 
            
            <div style="text-align:center; padding-bottom:10px">
                 <a class="btn btn-medium btn-primary text-decoration-none" href="https://github.com/koalatracing/koala">Get Started</a>
                 <a class="btn btn-medium btn-dark-ghost text-decoration-none margin-left-10" href="https://github.com/koalatracing/koala">Download</a>
            </div> 
            
            <div class="header-bg-container">
                <div  style="text-align:center;" >
                    <span style="position:absolute;margin-top:77px;margin-left:29px" class="traces"><span  class="circle-item">Traces</span></span>
                    <span style="position:absolute;margin-top:152px;margin-left:-76px"  class="metrics"><span  class="circle-item">Metrics</span></span>
                    <span style="position:absolute;margin-top:232px;margin-left:45px" class="logs"><span  class="circle-item">Logs</span></span>
                    
                    <img src="../assets/images/hero-background.svg" class="header-bg" style="height:300px">

                    <span style="position:absolute;margin-top:77px;margin-left:-87px" class="visualize"><span  class="circle-item">Visualize</span></span>
                    <span style="position:absolute;margin-top:152px;margin-left:10px" class="correlation"><span  class="circle-item">Correlate</span></span>
                    <span style="position:absolute;margin-top:230px;margin-left:-88px" class="alert"><span  class="circle-item">Smart</span></span>
                </div>

                <div style="text-align:center;color:white;font-size:15px;margin-top:30px;padding-bottom:60px" class="header-bg-step">
                    <span style="margin-left:-110px;">1. Collect data with OpenTelemetry</span>
                    <span style="margin-left:40px">2. Process raw data to structured </span>
                    <span style="margin-left:60px">3. See your data in dashboard</span>
                </div>
            </div>
            <div id="boat"> 
              <img src="../assets/images/boat.gif" alt="Helmy" style="width:100px;">
            </div>
        </div>
        <div style="background:#3fb1e5">
            <div class="compare container" style="text-align:center">
                <div class="row display-flex"  style="padding-top:25px">
                    <div class="d-none d-md-block col-md-5 text-center" style="margin-top:10px;">
                        <div class="different__traditional" style="color:rgba(0, 34, 64, 0.5)">
                            <h5 class="different__traditional--title" style="font-size:16px;padding-top:22px;">Traditional APM</h5>
                            <p class="different__text different__text--traditional different__highlight--traditional">
                                Mainly distributed tracing
                            </p>
                            <p class="different__text different__text--traditional">
                                 Partially open-source of commercial version
                            </p>
                            <p class="different__text different__text--traditional different__highlight--traditional">
                                Limited server map
                            </p>
                            <p class="different__text different__text--traditional">
                                Not-that-bad UI
                            </p>
                            <p class="different__text different__text--traditional different__highlight--traditional">
                                Limited supporting for alert
                            </p>
                            <p class="different__text different__text--traditional">
                                Moderate performance
                            </p>
                        </div>
                    </div>
                    <div class="different__trace col-12 col-md-7 text-center" style="padding-bottom:30px;margin-top:11px;">
                        <div class="different__trace--small">
                            <span style="font-size:30px;color:white" class="title-large">APM.AI (<a href="http://koa.la" style="color:white">Koala</a>)</span>
                            <p class="different__text different__text--trace different__highlight--trace" style="margin-top:41px;">
                                Distributed tracing, metrics, logs
                            </p>
                            <p class="different__text different__text--trace" style="font-weight:bold">
                                100% open-source (<a href="http://koa.la" style="color:white">Koala</a>), NO Commercial-Distribution
                            </p>
                            <p class="different__text different__text--trace different__highlight--trace">
                                Fully functional server map
                            </p>
                            <p class="different__text different__text--trace">
                                Beautiful and interactive UI
                            </p>
                            <p class="different__text different__text--trace different__highlight--trace">
                                Customize alert from template to user,channel
                            </p>
                            <p class="different__text different__text--trace">
                            Extremely performance: writing in go, scyllaDB supported
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container features" style="margin-top:60px"> 
            <h1 class="title-color" style="text-align:center">Core Features</h1>
            <div class="row display-flex" style="text-align:center;position:relative">
                <img class="process__path features-link" src="../assets/images/process__path.svg" alt="" style="position:absolute;z-index:0;top:0px;top: -20px;left: -15px;">
                <div class="col-12 col-md-3 mb-3 mb-md-0 feature-card">
                    <div class="process__card">
                        <img class="process__dot process__dot--one" src="../assets/images/process__dot1.svg" alt="" style="left: -40px;top: 23px;">
                        <div class="process__title">Blistering Fast</div>
                        <p class="process_desc text-color">Built in Go/Rust, we are blistering fast and memory efficient.</p>
                    </div>
                </div>
                <div class="col-12 col-md-3 mb-3 mb-md-0 feature-card" style="margin-left:45px">
                    <div class="process__card">
                        <img class="process__dot process__dot--one" src="../assets/images/process__dot1.svg" alt="" style="left: -40px;top: 100px;">
                        <div class="process__title">Traces,Metris &Logs</div>
                        <p class="process_desc">APM.AI unifies traces, logs and metrics in the core system. </p>
                    </div>
                </div>
                <div class="col-12 col-md-3 mb-3 mb-md-0 feature-card" style="margin-left:45px">
                    <div class="process__card">
                        <img class="process__dot process__dot--one" src="../assets/images/process__dot1.svg" alt="" style="left: -40px;top: 30px;">
                        <div class="process__title">Full Visibility</div>
                        <p class="process_desc">See every aspect of your applications and users in real-time</p>
                    </div>
                </div>
                <div class="col-12 col-md-3 mb-3 mb-md-0 feature-card" style="margin-left:45px">
                    <div class="process__card">
                        <img class="process__dot process__dot--one" src="../assets/images/process__dot1.svg" alt="" style="left: 15px;top: -10px;">
                        <div class="process__title">Smart </div>
                        <p class="process_desc">AI powered APM delivers the intelligent analysis and alert.</p>
                    </div>
                </div>
            </div>
        </div> 
        
        <div class="container feature-cards-2" style="margin-top:100px"> 
            <div class="row display-flex" style="text-align:center;position:relative">
                <div class="col-12 col-md-4 mb-3 mb-md-0 feature-card">
                    <div class="process__card">
                        <img class="process__dot process__dot--one" src="../assets/images/process__dot.svg" alt="" style="left: -13px;top: -10px;">
                        <div class="process__title">OpenTelemetry Native Support </div>
                        <p class="process_desc text-color">We support OpenTelemetry from scratch. <span class="extra-content">so you can use opentelemetry SDKs for instrumenting applications</span></p>
                    </div>
                </div>
                <div class="col-12 col-md-4 mb-3 mb-md-0 feature-card" style="margin-left:45px">
                    <div class="process__card">
                        <img class="process__dot process__dot--one" src="../assets/images/process__dot.svg" alt="" style="left: 60px;top: 180px;">
                        <div class="process__title">Pinpoint Compatible</div>
                        <p class="process_desc">Use pinpoint to instrument JAVA,compatible with OpenTelemery</p>
                    </div>
                </div>
                <div class="col-12 col-md-4 mb-3 mb-md-0 feature-card" style="margin-left:45px">
                    <div class="process__card">
                        <img class="process__dot process__dot--one" src="../assets/images/process__dot.svg" alt="" style="left: -40px;top: 76px;">
                        <div class="process__title">OpenSource</div>
                        <p class="process_desc"><a href="http://koa.la">Koala</a> is opensource distribution, it includes 100% features in APM.AI!</p>
                    </div>
                </div>
            </div>
        </div> 
          <div class="roadmap background-grey" style="margin-top:50px;padding-bottom:200px"> 
            <div class="container" style="padding-top:40px;line-height:1.5"> 
                <div style="font-size:28px;">Where We're Headed (Roadmap)</div>
                <div class="row display-flex" style="padding-top:30px;padding-left:15px">
                    <div class="timeline__bar"></div>
                     <div class="col-12 col-md-6 mb-3 mb-md-0">
                         <div class="timeline-item">
                             <a class="title" href="https://github.com/tracedt/koala/milestone/1">v0.1 - Server-side agent</a>  <span class="tag blue">IN DEV</span>
                             <p class="desc">Collect opentelemetry data , send them to Koala-Collector.</p>
                         </div>
                        <div class="timeline-item" style="margin-top:135px;">
                             <a class="title" href="https://github.com/tracedt/koala/milestone/4">v0.3 - Tracing Metrics Support</a>
                             <p class="desc">Extract general metrics from tracing data, such as url, sql, exception, method etc, visualize them in dashboard.</p>
                         </div>
                         <div class="timeline-item" style="margin-top:115px;">
                             <a class="title" href="https://github.com/tracedt/koala/milestone/5">v0.5 - Dependency Analyzing</a>
                             <p class="desc">Analyze the dependency data(server,url), output the server-map and url-map.</p>
                         </div>
                          <div class="timeline-item" style="margin-top:105px;">
                             <a class="title" href="https://github.com/tracedt/koala/milestone/2">v0.7 - Pinpoint supported</a>
                             <p class="desc">Make pinpoint compatible with OpenTelemetry</p>
                         </div>
                     </div>
                     <div class="col-12 col-md-6 mb-3 mb-md-0 roadmap-right" style="padding-left:8px">
                        <div class="timeline-item" style="margin-top:110px;">
                             <a class="title" href="https://github.com/tracedt/koala/milestone/3">v0.2 - Tracing Support</a> <span class="tag blue">IN DEV</span>
                             <p class="desc">Collect,process and visualize tracing data. </p>
                         </div>
                          <div class="timeline-item" style="margin-top:100px;">
                             <a class="title" href="https://github.com/tracedt/koala/milestone/6">v0.4 - Alerting</a>
                             <p class="desc">Build complex alerting logic using multiple trigger conditions, push alerts to multiple providers(sms, email etc).</p>
                         </div>
                         <div class="timeline-item" style="margin-top:100px;">
                             <a class="title" href="https://github.com/tracedt/koala/milestone/9" style="color:#6B07E5">v0.6 - Production Ready</a>
                             <p class="desc">Test in real production environment for about 6-8 weeks, fix all critical bugs.</p>
                         </div>
                          <div class="timeline-item" style="margin-top:100px;">
                             <a class="title" href="https://github.com/tracedt/koala/milestone/7">v0.8 - Metrics Support</a>
                             <p class="desc">Collect infrastructure and user-define metrics,correlate them with tracing data, output metrics to popular metrics storages.</p>
                         </div>
                     </div>
                </div>
                <div class="timeline__majorversion d-none d-sm-block" style="z-index:100">
                    <a style="position:absolute;margin-left:-30px;margin-top:38px;text-decoration:none;color:white" href="https://github.com/tracedt/koala/milestone/8">
                    V1.0
                    </a>
                </div>
            </div>
        </div>
        <div class="background--powers" style="padding-bottom:100px"> 
            <div class="container" style="padding-top:40px;">  
                <div style="font-size:24px;font-weight:bold;color:white; more-power-title">Gives You More Super Powers</div>
            </div>
            <div  style="text-align:center;margin-top:40px">
                <img src="../assets/images/powers-illustration.svg" alt="Gives You Super Powers" class="powers-illustration more-power-bg"  style="height:400px">
            </div>
        </div>

        <div>
            <div class="foot-tooltip" style="background:#041B3B;padding:30px 40px;color:white;width:50%;margin-left:25%;margin-top:-75px"> 
                 <div class="row display-flex">
                     <div class="col-12 col-md-6 mb-3 mb-md-0">
                         <div style="font-size:20px">Ready to use?</div>
                         <div style="color:rgba(255, 255, 255, 0.7);line-height:20px"> 
                            Get started by downloading Koala and following the install instructions.
                         </div>
                     </div>
                     <div class="col-12 col-md-6 mb-3 mb-md-0" style="padding-top:6px;text-align:center">
                         <a class="btn btn-medium btn-primary text-decoration-none" href="https://github.com/koalatracing/koala">Get Started</a>
                         <div style="margin-top:18px"> <a class="btn btn-medium btn-dark-ghost text-decoration-none margin-left-5" href="https://github.com/koalatracing/koala">Download</a></div>
                        
                     </div>
                 </div>
               
            </div>
        </div>

      
        <div class="container" style="text-align:center;padding-top:40px;padding-bottom:40px;font-size:14px;">
           Developed with  <img src="../assets/images/heart-icon.jpg" alt="Love" style="height:16px" > by APM.AI.
           <br />
           Version 1.0 © 2019 tracedt.com. All rights reserved.
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      hello: '',
      world: ''
    }
  },
  watch: { 
    $route() {
      // 当路由变化时，调用此函数
    },
    world(val) {
      // world发生变化时
    }
  },
  computed: {
    getAddr() {
      return process.env.API_ADDR
    }
  },
  methods: {
  },
  mounted() {
    this.world = this.$t('common.test')
  }
}
</script>


<style lang="less" scoped> 
@import "../theme/var.less";
.header {
    position: relative;
    // background: rgba(255,255,255,0.80);
    padding: 20px 0;
   background-image: radial-gradient(circle at center 70%, #004AB0, #001B3D 50%);
    box-sizing: border-box;
    .header-container {
        align-items: center;
        justify-content:space-between;
        display: flex;
        width: 100%;
        // padding-right: 15px;
        // padding-left: 15px;
        nav {
            .list-inline {
                padding-left: 0;
                list-style: none;
                display: flex;
                align-items: center;
                margin-top:10px;
                .list-inline-item {
                    margin-right: 40px;
                    display: inline-block;
                    font-size:15px;
                    .header__link {
                        color: #fff;
                        text-decoration: none;
                    }
                    a:hover {
                        // color: #0056b3;
                        text-decoration: underline;
                    }
                }
            } 
        }
    }

    .circle-item {
        border-radius: 50%;
        border:1px solid white;
        background: transparent;
        padding:15px 10px;
        color:white;
        font-size:13px;
    }
}
.background--powers {
    background-color: #1AE7FF;
    background-image: url("../assets/images/powers-background.jpg");
    -webkit-background-size: cover;
    background-size: cover;
    background-position: center center;
}

.header::after {
    background: url(../assets/images/waves.png) 0 0 repeat-x;
    background-size: 20px;
    bottom: 0;
    content: "";
    display: block;
    height: 6px;
    position: absolute;
    width: 100%;
}
.compare {
    padding-bottom:45px;
    text-align: center;
    padding-right: 15px;
    padding-left: 15px;
    // color:#fff ;
    .row {
        margin-right: -15px;
        margin-left: -15px;
        .d-md-block {
            display: block!important;
        }

        .different__traditional {
            position: relative;
            // right: -15px;
            top: 35px;
            color: #002240;
            background: rgba(255,255,255,0.80);
            box-shadow: 0 4px 10px 0 rgba(0,0,0,0.10);
            border-radius: 10px 0 0 10px;
        }

        .different__trace {
        box-shadow: 0px 8px 8px 6px rgba(0,0,0,0.10);
        border-radius: 30px;
        padding-top: 40px;
        }

  

        .different__highlight--traditional {
        margin: 0.4rem 0;
        background: rgba(255,255,255,0.4);
        }
        .different__text--traditional {
        padding: 0.8rem 0;
        margin: 0.4rem 0;
        }
        .different__highlight--trace {
        background: rgba(255,255,255,0.2);
        }
        .different__text--trace {
        color: #fff;
        }
        .different__text {
        margin: 0 0px;
        padding: 1rem 0;
        }
    }
}
.col-md-3 {
    background: rgba(255,255,255,.6);
    z-index:10
}
.process__card {
    padding: 0px 25px;
    padding-bottom: 15px;
    background: rgba(255,255,255,0.6);
    box-shadow: 0 4px 10px 0 rgba(0,0,0,0.10);
    border-radius: 20px;
    z-index: 10;
    line-height: 1.4;
    .process__dot {
        display: block;
        position: relative;
        z-index:0;
    }
    height: 180px;
}


@keyframes b {
    0% {
        left: -5%
    }

    to {
        left: 80%
    }
}

#boat {
    width: 150px;
    position: absolute;
    z-index: 1200;
    bottom: -15px;
    -webkit-animation-delay: 0;
    -webkit-animation-duration: 30s;
    -webkit-animation-name: b;
    -webkit-animation-fill-mode: forwards;
    -moz-animation-delay: 0;
    -moz-animation-duration: 30s;
    -moz-animation-name: b;
    -moz-animation-fill-mode: forwards;
    animation-delay: 0;
    animation-duration: 30s;
    animation-name: b;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite
}

.timeline__bar::before {
    content: "";
    position: absolute;
    width: 30px;
    height: 30px;
    right: -12px;
    background-color: #6b07e5;
    top: -15px;
    -webkit-border-radius: 50%;
    border-radius: 50%;
    z-index: 30;
}
.timeline__bar {
    width: 6px;
    height: 865px;
    position: absolute;
    left: 50%;
    margin-left: -5px;
    background-color: #6B07E5;
    background: #19e7ff;
    background: -webkit-linear-gradient(0deg, #19e7ff 0%, #6b07e5 100%);
    background: -webkit-gradient(linear, left bottom, left top, from(#19e7ff), to(#6b07e5));
    background: -webkit-linear-gradient(bottom, #19e7ff 0%, #6b07e5 100%);
    background: -o-linear-gradient(bottom, #19e7ff 0%, #6b07e5 100%);
    background: linear-gradient(0deg, #19e7ff 0%, #6b07e5 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#19e7ff",endColorstr="#6b07e5",GradientType=1);
    z-index: 20;
}
.timeline-item {
    border-top:1px solid #6B07E5;
    padding: 10px 20px;
    .title {
        color: @text-color;
        font-size:20px;
        font-weight: bold;
    }
    .tag {
        color: white;
        padding:3px 15px;
        border-radius: 10px;
        margin-left:5px;
        font-size:14px;
        display:inline-block
    }
    .tag.green {
          background-color: #00E34C;
    }
    .tag.blue {
        background-color: #19E7FF;
    }
    .desc {
        line-height: 1.2;
        font-size:14px;
    }
}
.timeline__majorversion {
    width: 120px;
    height: 120px;
    -webkit-border-radius: 50%;
    border-radius: 50%;
    position: absolute;
    left: 50%;
    margin-top:26px;
    margin-left: -60px;
    background-color: #10ddf5;
    color: white;
    font-size: 28px;
    text-align: center;
    font-weight: bold;
    display:block;
}

@media only screen and (max-width: 1200px) {
    .feature-card {
        margin-left:10px !important
    }
}
@media only screen and (max-width: 1024px) {
    .features-link {
        display: none;
    }
    .process__dot {
       visibility: hidden !important;
    }
    .header-bg-step {
        display:none !important
    }
    .timeline__bar {
        height: 897px;
    }
    .feature-card {
        margin-top:10px !important
    }
    .extra-content {
        display:none;
    }
    .feature-cards-2 {
        margin-top:10px !important;
    }
}

@media only screen and (max-width: 768px) {
    .header-bg {
        width: 300px;
    }
    .correlation {
        margin-left:-30px !important;
        margin-top: 167px !important;
    }
    .traces {
        margin-left: -20px !important;
        margin-top: 100px !important;
    }
    .logs {
        margin-top: 190px !important;
        margin-left:20px !important
    }
    .metrics {
        margin-left: -55px !important
    }
    .visualize {
        margin-top: 106px !important;
        margin-left: -43px !important
    }
    .alert {
        margin-top: 200px !important;
        margin-left: -70px !important
    }
    .circle-item {
        font-size: 12px !important;
         padding:10px 6px !important;
    }
     .timeline__bar {
        height: 1080px !important;
    }
    .more-power-bg {
        height: 250px !important;
        width: 100% !important;
    }
    .foot-tooltip {
        width: 100% !important;
        margin-left:0% !important;
        padding:30px 0px !important;
    }
}

@media only screen and (max-width: 576px) {
     .timeline__bar {
        height: 1116px !important;
    }
    .features {
        margin-top: 30px !important
    }

    .correlation {
        display:noe !important;
    }
    .github-logo {
        margin-right:0px !important
    }
    .header-logo {
        font-size:22px !important;
        margin-top:-5px
    }
    .process__title {
        line-height: 1.2;
    }
    .process_desc {
        line-height: 1.2;
    }
    .roadmap-right {
        padding:0px !important
    }
}
@media only screen and (max-width: 480px) {
     .timeline__bar {
        height: 1316px !important;
    }
    .header {
        .btn-dark-ghost {
            margin-left: 0 !important
        }
    }
    .feature-card {
        margin-left:0px !important
    }
}

@media only screen and (max-width: 376px) {
     .timeline__bar {
        height: 1416px !important;
    }
    .demo {
        display:none !important;
    }
     .correlation {
        margin-left:-50px !important;
        margin-top: 167px !important;
    }
    .foot-tooltip {
        .btn {
            display:inline-block
        }
    }
    .btn-medium {
        padding: 10px 20px;
    } 
}
@media only screen and (max-width: 320px) {
    .header-bg-container {
        display: none !important;
    }
}
</style>
<style>

</style>