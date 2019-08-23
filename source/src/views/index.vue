<template>
  <div class="index">
        <div class="header">
            <div class="header-container container"> 
                <a href="/" class="header-logo title-large" style=" color: #fff;text-decoration: none;font-size: 23px;margin-top:10px">
                   <img style="max-height:70px;color:#fff;" src="../assets/images/logo-maker-png-5.png">
                   <span style="position:absolute;top:46px;margin-left:67px">APM Labs</span>
                </a>
                <nav class="header-nav list-inline">
                    <ul class="list-inline">
                                                <li class="list-inline-item"><a class="header__link" :href="docsUrl">Docs</a></li>
                        <li class="list-inline-item demo"><a class="header__link">Demo</a></li> 
                        <li class="list-inline-item download"><a class="header__link" :href="downloadUrl">Download</a></li>
                        <li class="list-inline-item github-logo"><a class="header__link" :href="apmUrl">  <img style="max-height:22px;color:#fff;margin-bottom:-4px" src="../assets/images/github.svg"></a></li>
                    </ul>
                </nav>
            </div> 
            <div style="text-align:center;padding-top:30px;padding-bottom:10px" class="header-title">
                <p class="title-large" style="color:#fff;font-size:26px;font-weight:bold">Building next-generation opensource APM</p>
                <p class="sub-title" style="font-size:18px">A research, development institution for improving monitoring technology</p>
            </div> 
            
            <div style="text-align:center; padding-bottom:10px;margin-top:20px">
                 <a class="btn btn-medium btn-primary text-decoration-none" :href="docsUrl">Get Started</a>
                 <a class="btn btn-medium btn-dark-ghost text-decoration-none margin-left-10">Online Demo</a>
            </div> 
            
            <div class="header-bg-container margin-top-20">
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
                    <span style="margin-left:-110px;">1. Collect raw data with OpenTelemetry</span>
                    <span style="margin-left:40px">2. Raw data processing </span>
                    <span style="margin-left:60px">3. Visualization and Analysis</span>
                </div>
            </div>
            <div id="boat"> 
              <img src="../assets/images/boat.gif" alt="Helmy" style="width:100px;">
            </div>
            
             <div class="compare" style="text-align:center">
                <Row class="row" style="padding-top:25px;padding-left:100px;padding-right:100px">
                    <Col :xs="12" :sm="12" :md="12" :lg="{ span: 10, offset: 2 }"  class="text-center" style="margin-top:10px;">
                        <div class="different__traditional" style="color:rgba(0, 34, 64, 0.5)">
                            <h5 class="different__traditional--title" style="font-size:16px;padding-top:22px;padding-bottom:20px">Traditional APM</h5>
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
                    </Col>
                    <Col  :xs="12" :sm="12" :md="12" :lg="10"  class="different__trace text-center" style="padding-bottom:30px;margin-top:11px;">
                        <div class="different__trace--small">
                            <span style="font-size:30px;color:white" class="title-large"><a :href="koalaUrl" style="color:white">Koala</a></span>
                            <p class="different__text different__text--trace different__highlight--trace" style="margin-top:8px;">
                                Tracing, metrics, logs
                            </p>
                            <p class="different__text different__text--trace" style="font-weight:bold">
                                100% open-source (<a :href="koalaUrl" style="color:white">Koala</a>), NO Commercial-Distribution
                            </p>
                            <p class="different__text different__text--trace different__highlight--trace">
                                Fully functional server map
                            </p>
                            <p class="different__text different__text--trace">
                                Beautiful and interactive UI
                            </p>
                            <p class="different__text different__text--trace different__highlight--trace">
                                Alert powered by AI
                            </p>
                            <p class="different__text different__text--trace">
                            Extremely performance: writing in go, scyllaDB supported
                            </p>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
        <div>
           
        </div>

        <div class="margin-top-20 core-features">
            <Row>
                <Col :xs="24" :sm="24" :md="24" :lg="{ span: 16, offset: 4 }">
                    <Row  style="text-align:center" class="margin-top-10">
                         <Col :xs="12" :sm="12" :md="8" :lg="8">
                            <div class="feature">
                                <img src="../assets/images/feature-fast.png">
                            </div>
                            <div class="title">Blistering Fast</div>
                            <div class="content">Built in Go/Rust, we are blistering fast and memory efficient.</div>
                        </Col>
                         <Col :xs="12" :sm="12" :md="8" :lg="8">
                            <div class="feature">
                                <img src="../assets/images/feature-agnostic.png">
                            </div>
                            <div class="title">OpenSource</div>
                            <div class="content">Our products are 100% open-source, no commercial-version in the future!</div>
                        </Col>
                         <Col :xs="12" :sm="12" :md="8" :lg="8">
                             <div class="feature">
                                <img src="../assets/images/feature-distributed.png">
                            </div>
                            <div class="title">Full Visibility</div>
                            <div class="content">See every aspect of your applications and users in real-time</div>
                        </Col>
                         <Col :xs="12" :sm="12" :md="8" :lg="8">
                            <div class="feature">
                                <img src="../assets/images/feature-logs.png">
                            </div>
                            <div class="title">Traces,Metris &Logs</div>
                            <div class="content">APM.AI unifies traces, logs and metrics in the core system.</div>
                        </Col>
                         <Col :xs="12" :sm="12" :md="8" :lg="8">
                            <div class="feature">
                                <img src="../assets/images/feature-transforms.png">
                            </div>
                            <div class="title">Smart</div>
                            <div class="content">AI powered APM delivers the intelligent analysis and alert.</div>
                        </Col>
                        <Col :xs="12" :sm="12" :md="8" :lg="8">
                             <div class="feature">
                                <img src="../assets/images/feature-delivery.png">
                            </div>
                            <div class="title">Multi Data Supported</div>
                            <div class="content">You can use opentelemetry and pinpoint agent to collect data</div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
      
          <Row class="roadmap background-grey" style="margin-top:50px;padding-bottom:100px;padding-top:50px"> 
            <Col :xs="24" :sm="24" :md="24" :lg="{ span: 16, offset: 4 }"  style="line-height:1.5"> 
                  <div style="font-size:28px;">Where We're Headed (Roadmap)</div>
                <Row  style="padding-top:50px;">
                    <div class="timeline__bar"></div>
                     <Col :xs="12" :sm="12" :md="12" :lg="{ span: 10, offset: 2 }">
                       
                         <div class="timeline-item">
                             <a class="title" :href="koalaUrl + '/milestone/1'">v0.1 - Server-side agent</a>  <span class="tag blue">IN DEV</span>
                             <p class="desc">Collect opentelemetry data , send them to Koala-Collector.</p>
                         </div>
                        <div class="timeline-item" style="margin-top:135px;">
                             <a class="title" :href="koalaUrl + '/milestone/3'">v0.3 - Tracing Metrics Support</a>
                             <p class="desc">Extract general metrics from tracing data, such as url, sql, exception, method etc, visualize them in dashboard.</p>
                         </div>
                         <div class="timeline-item" style="margin-top:115px;">
                             <a class="title" :href="koalaUrl + '/milestone/5'">v0.5 - Dependency Analyzing</a>
                             <p class="desc">Analyze the dependency data(server,url), output the server-map and url-map.</p>
                         </div>
                          <div class="timeline-item" style="margin-top:105px;">
                             <a class="title" :href="koalaUrl + '/milestone/7'">v0.7 - Pinpoint supported</a>
                             <p class="desc"> 1. Modified pinpoint-agent.jar to support OpenTelemery 2. Convert pinpoint-format to opentelemetry-format</p>
                         </div>
                         <div class="timeline-item" style="margin-top:80px;">
                             <a class="title" :href="koalaUrl + '/milestone/7'">Future - Logs Support</a>
                             <p class="desc">Collect logs in Koala-Agent(integrated with filebeat etc), correlate logs with tracing and metrcs, output logs to popular metrics storages, visualize and search them in Koala-Dashboard</p>
                         </div>
                     </Col>
                     <Col :xs="12" :sm="12" :md="12" :lg="10" class="roadmap-right">
                        <div class="timeline-item" style="margin-top:110px;">
                             <a class="title" :href="koalaUrl + '/milestone/2'">v0.2 - Tracing Support</a> <span class="tag blue">IN DEV</span>
                             <p class="desc">Collect,process and visualize tracing data. </p>
                         </div>
                          <div class="timeline-item" style="margin-top:100px;">
                             <a class="title" :href="koalaUrl + '/milestone/4'">v0.4 - Alerting</a>
                             <p class="desc">Build complex alerting logic using multiple trigger conditions, push alerts to multiple providers(sms, email etc).</p>
                         </div>
                         <div class="timeline-item" style="margin-top:100px;">
                             <a class="title" :href="koalaUrl + '/milestone/6'" >v0.6 - Metrics Support.</a>
                             <p class="desc">Collect infrastructure and user-define metrics,correlate them with tracing data, output metrics to popular metrics storages</p>
                         </div>
                          <div class="timeline-item" style="margin-top:100px;">
                             <a class="title" :href="koalaUrl + '/milestone/8'" style="color:#6B07E5">v1.0 - Production Ready</a>
                             <p class="desc">Test in real production environment for at least 6 weeks, fix all critical bugs.</p>
                         </div>
                     </Col>
                </Row>
            </Col>
        </Row>
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
                         <a class="btn btn-medium btn-primary text-decoration-none" :href="docsUrl">Get Started</a>
                         <div style="margin-top:18px"> <a class="btn btn-medium btn-dark-ghost text-decoration-none margin-left-5" :href="downloadUrl">Download</a></div>
                        
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
      world: '',
      docsUrl: 'https://docs.apm.ai',
      downloadUrl: 'https://github.com/apm-ai/koala/releases',
      koalaUrl: 'https://github.com/apm-ai/koala',
      apmUrl: 'https://github.com/apm-ai'
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
    // height: 101vh;
    position: relative;
    // background: rgba(255,255,255,0.80);
    padding: 20px 0;
   background:  url("../assets/images/grd_main.jpg") no-repeat 45% 45%;
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

// .header::after {
//     background: url(../assets/images/waves.png) 0 0 repeat-x;
//     background-size: 20px;
//     bottom: 0;
//     content: "";
//     display: block;
//     height: 6px;
//     position: absolute;
//     width: 100%;
// }
.compare {
    padding-bottom:45px;
    text-align: center;
    padding-right: 15px;
    padding-left: 15px;
    color:#fff ;
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
            background: rgba(255,255,255,0.50);
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

.core-features {
    img {
        width: 35px;
    }
    .feature {
       text-align: center;
        width: 100%;
        margin: 0 auto;
        display: table;
        white-space: nowrap;
        margin-top:40px;
    }
    .feature::before {
        border-top: 1px solid #1ADEFA;
        content: '';
        display: table-cell;
        position: relative;
        top: 18px;
        width: 40%;
    }
    .feature::after {
        border-top: 1px solid #1ADEFA;
        content: '';
        display: table-cell;
        position: relative;
        top: 18px;
        width: 40%;
    }
    .title {
        font-size:18px
    }
    .content {
        font-size:15px;
        color:rgba(30, 55, 90, 0.6);
        margin-top:5px
    }
}

@keyframes b {
    0% {
        left: -5%
    }

    to {
        left: 100%
    }
}

#boat {
    width: 100px;
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


@media only screen and (max-width: 1024px) {
    .header-bg-step {
        display:none !important
    }
    .timeline__bar {
        height: 897px;
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
    .compare {
        .row {
            padding-left:0px !important;
             padding-right:0px !important;
             padding-top:0px !important;

        }
    }
        #boat {
        display: none !important;
    }
    .header-title  {
        .title-large {
            font-size: 20px !important
        }
        .sub-title {
            font-size: 16px !important;
        }
    }
    .header-bg-container  {
        margin-top:0px !important;
    }
}

@media only screen and (max-width: 576px) {
     .timeline__bar {
        height: 1116px !important;
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
    .roadmap-right {
        padding:0px !important
    }
    .header-nav {
        .download {
            display:none !important;
        }
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