<template>
  <div class="index">
        <div class="header">
            <div class="header-container container"> 
                <a href="/" style=" color: #2dafe9;text-decoration: none;font-size: 35px;">
                    Koala
                </a>
                <nav class="header-nav list-inline">
                    <ul class="list-inline">
                        <li class="list-inline-item"><a class="header__link" href="https://github.com/koalatracing/koala">Download</a></li>
                        <li class="list-inline-item"><a class="header__link">Docs</a></li>
                        <li class="list-inline-item"><a class="header__link">Demo</a></li> 
                        <li class="list-inline-item"><a class="header__link" href="https://github.com/koalatracing/koala">  <img style="max-height:22px;color:#464646;margin-bottom:-4px" src="../assets/images/github.svg"></a></li>
                    </ul>
                </nav>
            </div> 
            <div style="text-align:center;padding-top:50px;padding-bottom:50px">
                <h1 style="color:#2dafe9">Trace everything from user-side to server-side</h1>
                <p class="sub-title-color">Distributed tracing,metrics,logs, Koala can do anything you need in monitoring</p>
            </div> 
            
            <div style="text-align:center; padding-bottom:80px">
                 <a class="btn btn-large btn-primary text-decoration-none" href="https://github.com/koalatracing/koala">Get Started</a>
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
                                Only distributed tracing
                            </p>
                            <p class="different__text different__text--traditional">Only JVM</p>
                            <p class="different__text different__text--traditional different__highlight--traditional">
                                Limited application topology
                            </p>
                            <p class="different__text different__text--traditional">
                                UI
                            </p>
                            <p class="different__text different__text--traditional different__highlight--traditional">
                                Limited supporting for alert
                            </p>
                            <!-- <p class="different__text different__text--traditional">
                                Manual agent deployment
                            </p> -->
                            <p class="different__text different__text--traditional different__highlight--traditional">
                                Moderate performance
                            </p>
                        </div>
                    </div>
                    <div class="different__trace col-12 col-md-7 text-center" style="padding-bottom:30px;margin-top:11px;">
                        <div class="different__trace--small">
                            <span style="font-size:30px;color:white">Koala</span>
                            <p class="different__text different__text--trace different__highlight--trace" style="margin-top:41px;">
                                Distributed tracing, metrics, logs
                            </p>
                            <p class="different__text different__text--trace">
                                JVM, infrastructure, go runtime etc
                            </p>
                            <p class="different__text different__text--trace different__highlight--trace">
                                Customize your topology map, much more detail
                            </p>
                            <p class="different__text different__text--trace">
                                Beautiful and interactive UI, very efficient
                            </p>
                            <p class="different__text different__text--trace different__highlight--trace">
                                Customize alert from template to user,channel
                            </p>
                            <!-- <p class="different__text different__text--trace">
                                Auto deployment/update/keep-alive by tracecat agentd
                            </p> -->
                            <p class="different__text different__text--trace different__highlight--trace">
                            Extremely performance: writing in go, scyllaDB supported
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="row about display-flex" style="padding-top: 40px;text-align:center">
            <div  class="demo d-none d-md-block col-md-5 text-center" style="vertical-align:center;margin-top:120px">
                 <img src="../assets/images/about-bg.svg">
            </div>
            <div class=" about  col-md-5 text-center" style="padding:0 40px;text-align:left;">
                <h1 class="title-color">Why do we build koala?</h1>
                <p style="font-size:17px;">Monitoring can divide into distributed tracing,metrics,logs</p>
                <p style="font-size:17px;">
                    Distributed tracing deals with information that is request-scoped. 
                    As examples: the lifecycle of an outbound RPC to a remote service; the text of an SQL query etc.
                </p>
                <p style="font-size:17px;">
                    Metrics can be aggregatable: they are the atoms that compose into a single logical gauge, counter, or histogram over a span of time. As examples: the number of incoming HTTP requests
                </p>
                <p style="font-size:17px;">
                    Logging deals with discrete events. As examples: application debug or error messages etc.
                </p>
                <p style="font-size:17px;">
                    Traditional monitoring tools usually only support one aspect, but those three
                    are definitely all parts of a broader picture, and can definitely overlap in some circumstances
                </p>
                <p style="font-size:17px;">
                    So we want to achieve these goals, and make them seemlessly integrated, booooooom! koala comes.
                </p>
            </div>
        </div>
        
        <div class="container" style="margin-top:60px"> 
            <h1 class="title-color" style="text-align:center">Deploy Phase</h1>
            <div class="row display-flex" style="text-align:center;position:relative">
                <img class="process__path" src="../assets/images/process__path.svg" alt="" style="position:absolute;z-index:0;top:0px;top: -20px;left: -15px;">
                <div class="col-12 col-md-3 mb-3 mb-md-0">
                    <div class="process__card">
                        <img class="process__dot process__dot--one" src="../assets/images/process__dot1.svg" alt="" style="left: -40px;top: 23px;">
                        <div class="process__title">Koala</div>
                        <p class="process_desc text-color">Koala is written in <strong>pure go</strong>, so the deployment is very very easy</p>
                    </div>
                </div>
                <div class="col-12 col-md-3 mb-3 mb-md-0" style="margin-left:45px">
                    <div class="process__card">
                        <img class="process__dot process__dot--one" src="../assets/images/process__dot1.svg" alt="" style="left: -40px;top: 100px;">
                        <div class="process__title">Koala Agents</div>
                        <p class="process_desc">You need to deploy our koala agent in every server</p>
                    </div>
                </div>
                <div class="col-12 col-md-3 mb-3 mb-md-0" style="margin-left:45px">
                    <div class="process__card">
                        <img class="process__dot process__dot--one" src="../assets/images/process__dot1.svg" alt="" style="left: -40px;top: 30px;">
                        <div class="process__title">Java Application</div>
                        <p class="process_desc">For java, we provide <strong>pinpoint</strong> agents, you don't need modify any code</p>
                    </div>
                </div>
                <div class="col-12 col-md-3 mb-3 mb-md-0" style="margin-left:45px">
                    <div class="process__card">
                        <img class="process__dot process__dot--one" src="../assets/images/process__dot1.svg" alt="" style="left: 196px;top: 178px;">
                        <div class="process__title">Clients SDK</div>
                        <p class="process_desc">For other languages,we provide sdks for you to instrument the code</p>
                    </div>
                </div>
            </div>
        </div> 
        
        <div class="container" style="margin-top:100px"> 
            <h1 class="title-color" style="text-align:center">Start from Alert</h1>
            <div class="row display-flex" style="text-align:center;position:relative">
                <!-- <img class="process__path" src="../assets/images/process__path.svg" alt="" style="position:absolute;z-index:0;top:0px;top: -20px;left: -15px;"> -->
                <div class="col-12 col-md-3 mb-3 mb-md-0">
                    <div class="process__card">
                        <img class="process__dot process__dot--one" src="../assets/images/process__dot.svg" alt="" style="left: -13px;top: -10px;">
                        <div class="process__title">Receive Alert</div>
                        <p class="process_desc text-color">A alert message contains a unique id, you can use this id to access <strong>alert snapshot</strong></p>
                    </div>
                </div>
                <div class="col-12 col-md-3 mb-3 mb-md-0" style="margin-left:45px">
                    <div class="process__card">
                        <img class="process__dot process__dot--one" src="../assets/images/process__dot.svg" alt="" style="left: -40px;top: 140px;">
                        <div class="process__title">Alert Snapshot</div>
                        <p class="process_desc">In snapshot, you will see everything for the alert, this will help you quickly got what happended</p>
                    </div>
                </div>
                <div class="col-12 col-md-3 mb-3 mb-md-0" style="margin-left:45px">
                    <div class="process__card">
                        <img class="process__dot process__dot--one" src="../assets/images/process__dot.svg" alt="" style="left: -40px;top: 63px;">
                        <div class="process__title">Distribute Tracing</div>
                        <p class="process_desc">You can see all requests in snapshot,and find where the error/delay happens</p>
                    </div>
                </div>
                <div class="col-12 col-md-3 mb-3 mb-md-0" style="margin-left:45px">
                    <div class="process__card">
                        <img class="process__dot process__dot--one" src="../assets/images/process__dot.svg" alt="" style="left:38px;top: -10px;">
                        <div class="process__title">JVM and infrastructure</div>
                        <p class="process_desc">You can see the JVM status and cpu/memory/network/etc status in the snapshot</p>
                    </div>
                </div>
            </div>
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
    padding: 40px 0;
    background: url(../assets/images/header-bg.png) 0 0 repeat;
    background-size: 376px;
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
                    font-size:16px;
                    .header__link {
                        color: #27759a;
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
</style>
<style>

</style>