<template>
  <div class="index">
        <div class="header">
            <div class="header-container container"> 
                <a href="/" style=" color: #fff;text-decoration: none;font-size: 26px;">
                    APM.AI
                </a>
                <nav class="header-nav list-inline">
                    <ul class="list-inline">
                        <li class="list-inline-item"><a class="header__link" href="https://github.com/koalatracing/koala">Download</a></li>
                        <li class="list-inline-item"><a class="header__link">Docs</a></li>
                        <li class="list-inline-item"><a class="header__link">Demo</a></li> 
                        <li class="list-inline-item"><a class="header__link" href="https://github.com/koalatracing/koala">  <img style="max-height:22px;color:#fff;margin-bottom:-4px" src="../assets/images/github.svg"></a></li>
                    </ul>
                </nav>
            </div> 
            <div style="text-align:center;padding-top:20px;padding-bottom:10px">
                <p style="color:#fff;font-size:26px;font-weight:bold;line-height:20px"> Blends APM with AI to trace data easier</p>
                <p class="sub-title" style="font-size:18px">Collect and Visilize tracing, metrics and logs, based on OpenTelemetry</p>
            </div> 
            
            <div style="text-align:center; padding-bottom:10px">
                 <a class="btn btn-medium btn-primary text-decoration-none" href="https://github.com/koalatracing/koala">Get Started</a>
                 <a class="btn btn-medium btn-dark-ghost text-decoration-none margin-left-10" href="https://github.com/koalatracing/koala">Download</a>
            </div> 
            
            <div  style="text-align:center;" >
                <span style="position:absolute;margin-top:77px;margin-left:15px"><span  class="circle-item">Traces</span></span>
                <span style="position:absolute;margin-top:152px;margin-left:-88px"><span  class="circle-item">Metrics</span></span>
                <span style="position:absolute;margin-top:232px;margin-left:45px"><span  class="circle-item">Logs</span></span>
                
                <img src="../assets/images/hero-background.svg" style="height:300px">

                <span style="position:absolute;margin-top:77px;margin-left:-87px"><span  class="circle-item">Visualization</span></span>
                <span style="position:absolute;margin-top:152px;margin-left:10px"><span  class="circle-item">Traceable</span></span>
                <span style="position:absolute;margin-top:230px;margin-left:-88px"><span  class="circle-item">Alerts</span></span>
            </div>

            <div style="text-align:center;color:white;font-size:15px;margin-top:30px;padding-bottom:60px">
                <span style="margin-left:-110px;">1.Collect data with OpenTelemetry/Pinpoint</span>
                <span style="margin-left:40px">2. Processing raw data in APM.AI</span>
                <span style="margin-left:60px">3. Use APM.AI to see the data</span>
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
                            <!-- <p class="different__text different__text--traditional">
                                Manual agent deployment
                            </p> -->
                            <p class="different__text different__text--traditional">
                                Moderate performance
                            </p>
                        </div>
                    </div>
                    <div class="different__trace col-12 col-md-7 text-center" style="padding-bottom:30px;margin-top:11px;">
                        <div class="different__trace--small">
                            <span style="font-size:30px;color:white">APM.AI (<a href="http://koa.la" style="color:white">Koala</a>)</span>
                            <p class="different__text different__text--trace different__highlight--trace" style="margin-top:41px;">
                                Distributed tracing, metrics, logs
                            </p>
                            <p class="different__text different__text--trace" style="font-weight:bold">
                                100% open-source (<a href="http://koa.la" style="color:white">Koala</a>), NO Commercial-Version
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
                            <!-- <p class="different__text different__text--trace">
                                Auto deployment/update/keep-alive by tracecat agentd
                            </p> -->
                            <p class="different__text different__text--trace">
                            Extremely performance: writing in go, scyllaDB supported
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container" style="margin-top:60px"> 
            <h1 class="title-color" style="text-align:center">Some Features</h1>
            <div class="row display-flex" style="text-align:center;position:relative">
                <img class="process__path" src="../assets/images/process__path.svg" alt="" style="position:absolute;z-index:0;top:0px;top: -20px;left: -15px;">
                <div class="col-12 col-md-3 mb-3 mb-md-0">
                    <div class="process__card">
                        <img class="process__dot process__dot--one" src="../assets/images/process__dot1.svg" alt="" style="left: -40px;top: 23px;">
                        <div class="process__title">Blistering Fast</div>
                        <p class="process_desc text-color">Built in Go/Rust, we are blistering fast and memory efficient.</p>
                    </div>
                </div>
                <div class="col-12 col-md-3 mb-3 mb-md-0" style="margin-left:45px">
                    <div class="process__card">
                        <img class="process__dot process__dot--one" src="../assets/images/process__dot1.svg" alt="" style="left: -40px;top: 100px;">
                        <div class="process__title">Traces,Metris&Logs</div>
                        <p class="process_desc">APM.AI unifies traces, logs and metrics in the core system. </p>
                    </div>
                </div>
                <div class="col-12 col-md-3 mb-3 mb-md-0" style="margin-left:45px">
                    <div class="process__card">
                        <img class="process__dot process__dot--one" src="../assets/images/process__dot1.svg" alt="" style="left: -40px;top: 30px;">
                        <div class="process__title">Beautiful UI</div>
                        <p class="process_desc"></p>
                    </div>
                </div>
                <div class="col-12 col-md-3 mb-3 mb-md-0" style="margin-left:45px">
                    <div class="process__card">
                        <img class="process__dot process__dot--one" src="../assets/images/process__dot1.svg" alt="" style="left: 196px;top: 178px;">
                        <div class="process__title">Fully APM Features</div>
                        <p class="process_desc">For other languages,we provide sdks for you to instrument the code</p>
                    </div>
                </div>
            </div>
        </div> 
        
        <div class="container" style="margin-top:100px"> 
            <div class="row display-flex" style="text-align:center;position:relative">
                <!-- <img class="process__path" src="../assets/images/process__path.svg" alt="" style="position:absolute;z-index:0;top:0px;top: -20px;left: -15px;"> -->
                <div class="col-12 col-md-4 mb-3 mb-md-0">
                    <div class="process__card">
                        <img class="process__dot process__dot--one" src="../assets/images/process__dot.svg" alt="" style="left: -13px;top: -10px;">
                        <div class="process__title">OpenTelemetry Supported</div>
                        <p class="process_desc text-color">A alert message contains a unique id, you can use this id to access <strong>alert snapshot</strong></p>
                    </div>
                </div>
                <div class="col-12 col-md-4 mb-3 mb-md-0" style="margin-left:45px">
                    <div class="process__card">
                        <img class="process__dot process__dot--one" src="../assets/images/process__dot.svg" alt="" style="left: 60px;top: 180px;">
                        <div class="process__title">Pinpoint Supported</div>
                        <p class="process_desc">In snapshot, you will see everything for the alert, this will help you quickly got what happended</p>
                    </div>
                </div>
                <div class="col-12 col-md-4 mb-3 mb-md-0" style="margin-left:45px">
                    <div class="process__card">
                        <img class="process__dot process__dot--one" src="../assets/images/process__dot.svg" alt="" style="left: -40px;top: 76px;">
                        <div class="process__title">100% Open-Source</div>
                        <p class="process_desc">You can see all requests in snapshot,and find where the error/delay happens</p>
                    </div>
                </div>
            </div>
        </div> 
        
        <div class="background--powers" style="margin-top:100px;padding-bottom:100px"> 
            <div class="container" style="padding-top:40px;">  
                <div style="font-size:24px;font-weight:bold;color:white;">Gives You Super Powers</div>
            </div>
            <div  style="text-align:center;margin-top:40px">
                <img src="../assets/images/powers-illustration.svg" alt="Gives You Super Powers" class="powers-illustration" style="height:400px">
            </div>
        </div>

        <div>
            <div style="background:#041B3B;padding:30px 40px;color:white;width:50%;margin-left:25%;margin-top:-75px"> 
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

        <div class="roadmap background-grey" style="margin-top:50px;padding-bottom:200px"> 
            <div class="container" style="padding-top:40px;line-height:1.5"> 
                <div style="font-size:28px;">Where We're Headed</div>
                <div class="row display-flex" style="padding-top:30px">
                    <div class="timeline__bar"></div>
                     <div class="col-12 col-md-6 mb-3 mb-md-0">
                         <div class="timeline-item">
                             <a class="title" href="#">v0.1 - Logs Support</a>  <span class="tag green">RELEASED</span>
                             <p class="desc">Basic log collection and shipping.</p>
                         </div>
                        <div class="timeline-item" style="margin-top:135px;">
                             <a class="title" href="#">v0.3 - Parsing & Transforming</a>
                             <p class="desc">LUA runtime, Regex parser, Grok parser, tokenized parser, and more.</p>
                         </div>
                         <div class="timeline-item" style="margin-top:115px;">
                             <a class="title" href="#">v0.5 - Stream Consumers</a>
                             <p class="desc">Kafka, Kinesis, and SQS consumer sources.</p>
                         </div>
                          <div class="timeline-item" style="margin-top:105px;">
                             <a class="title" href="#">v0.7 - CLI</a>
                             <p class="desc">List vector instances, view topology, validate config changes, syphon test data, pre-flight testing, observability, and more.</p>
                         </div>
                     </div>
                     <div class="col-12 col-md-6 mb-3 mb-md-0" style="padding-left:8px">
                        <div class="timeline-item" style="margin-top:110px;">
                             <a class="title" href="#">v0.2 - Metrics Support</a> <span class="tag blue">IN DEV</span>
                             <p class="desc">Basic metrics support in the context of logs: converting logs to metrics, outputting metrics to popular metrics storages.</p>
                         </div>
                          <div class="timeline-item" style="margin-top:100px;">
                             <a class="title" href="#">v0.4 - Schemas</a>
                             <p class="desc">Ability to coerce values and define a schema, guaranteeing consistent normalized types for known fields.</p>
                         </div>
                         <div class="timeline-item" style="margin-top:100px;">
                             <a class="title" href="#">v0.6 - Columnar Writing</a>
                             <p class="desc">CSV/ORC/Parquet, Big Query, ClickHouse, and more.</p>
                         </div>
                          <div class="timeline-item" style="margin-top:100px;">
                             <a class="title" href="#">v0.8 - Wire Level Tailing</a>
                             <p class="desc">Directly connect to vector instances and live tail the stream, compute aggregates, and get real-time millisecond latency.</p>
                         </div>
                     </div>
                </div>
                <div class="timeline__majorversion d-none d-sm-block">
                    <span style="position:absolute;margin-left:-30px;margin-top:38px">V1.0</span>
                </div>
            </div>
        </div>
        <div class="container" style="text-align:center;padding-top:40px;padding-bottom:40px;font-size:14px;">
           Developed with  <img src="../assets/images/heart-icon.jpg" alt="Love" style="height:16px" > by APM.AI.
           <br />
            © 2019 tracedt.com. All rights reserved.
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
        padding-right: 15px;
        padding-left: 15px;
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
        left: 100%
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
</style>
<style>

</style>