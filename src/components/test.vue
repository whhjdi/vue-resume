<template>
  <div class="content">

    <!--基本信息-->
    <header class="content-hd">
      <section class="title">
        <div class="name">
          <h1>{{resume.profile.name}}</h1>
        </div>
        <div class="job">
          <h2>Web前端开发工程师</h2>
        </div>
      </section>
      <section class="info">
        <ul>
          <li>{{resume.profile.gender}} / {{resume.profile.age}} / {{resume.profile.city}}</li>
          <li>{{resume.study.school}} · {{resume.study.major}}</li>
          <li>{{resume.study.degree}} / {{resume.study.duration}}至{{resume.study.duration2}}</li>
        </ul>
      </section>
      <section class="contact">
        <ul>
          <li>
            <a :href="resume.profile.blog">
              <span class="contact-link">博客</span>
              <span class="iconfont">
                <svg width="16px" height="16px" viewBox="0 0 1024 1024">
                  <path d="M512 42.581333l-469.333333 469.333333 31.146667 31.146667L170.666667 446.250667l0 438.186667 682.666667 0L853.333333 446.208l96.853333 96.896 31.146667-31.146667L512 42.581333zM426.666667 841.770667l0-298.666667 170.666667 0 0 298.666667L426.666667 841.770667zM810.666667 841.770667l-170.666667 0 0-341.333333L384 500.437333l0 341.333333L213.333333 841.770667 213.333333 403.584l298.666667-298.666667 298.666667 298.666667L810.666667 841.770667z"></path>
                </svg>
              </span>
            </a>
          </li>
          <li>
            <a :href="resume.profile.github">
              <span class="contact-link">github</span>
              <span class="iconfont">
                <svg width="16px" height="16px" viewBox="0 0 1024 1024">
                  <path d="M941.714 512q0 143.433-83.712 258.011t-216.283 158.574q-15.433 2.853-22.565-3.986t-7.131-17.152v-120.576q0-55.442-29.696-81.152 32.585-3.438 58.587-10.277t53.723-22.272 46.299-37.998 30.281-60.014 11.703-86.016q0-69.157-45.129-117.723 21.138-52.005-4.571-116.553-16.018-5.157-46.299 6.29t-52.553 25.161l-21.723 13.714q-53.138-14.848-109.714-14.848t-109.714 14.848q-9.143-6.29-24.283-15.433t-47.726-22.016-49.152-7.717q-25.161 64.585-3.986 116.553-45.129 48.567-45.129 117.723 0 48.567 11.703 85.723t29.989 60.014 46.007 38.29 53.723 22.272 58.587 10.277q-22.857 20.553-28.014 58.843-11.995 5.705-25.71 8.558t-32.585 2.853-37.413-12.288-31.707-35.73q-10.862-18.286-27.721-29.696t-28.27-13.714l-11.447-1.719q-11.995 0-16.567 2.56t-2.853 6.583 5.157 8.009 7.424 6.839l3.986 2.853q12.581 5.705 24.869 21.723t17.993 29.147l5.705 13.129q7.424 21.723 25.161 35.145t38.29 17.152 39.717 3.986 31.707-2.011l13.129-2.304q0 21.723 0.293 50.871t0.293 30.866q0 10.277-7.424 17.152t-22.857 3.986q-132.571-43.995-216.283-158.574t-83.712-258.011q0-119.442 58.843-220.27t159.707-159.707 220.27-58.843 220.27 58.843 159.707 159.707 58.843 220.27z"></path>
                </svg>
              </span>
            </a>
          </li>
          <li>
            <a>
              <span class="contact-link">{{resume.profile.number}}</span>
              <span class="iconfont">
                <svg width="16px" height="16px" viewBox="0 0 1024 1024">
                  <path d="M256 1024l512 0c26.464 0 48-21.536 48-48l0-928c0-26.464-21.536-48-48-48l-512 0c-26.464 0-48 21.536-48 48l0 928c0 26.464 21.536 48 48 48zM240 48c0-8.832 7.168-16 16-16l512 0c8.832 0 16 7.168 16 16l0 928c0 8.832-7.168 16-16 16l-512 0c-8.832 0-16-7.168-16-16l0-928zM288 864l448 0c8.832 0 16-7.168 16-16l0-672c0-8.832-7.168-16-16-16l-448 0c-8.832 0-16 7.168-16 16l0 672c0 8.832 7.168 16 16 16zM304 192l416 0 0 640-416 0 0-640zM496 928c0 17.664 14.336 32 32 32s32-14.336 32-32c0-17.664-14.336-32-32-32-17.664 0-32 14.336-32 32zM448 128l128 0c8.832 0 16-7.168 16-16s-7.168-16-16-16l-128 0c-8.832 0-16 7.168-16 16s7.168 16 16 16z"></path>
                </svg>
              </span>
            </a>
          </li>
          <li>
            <a href="`mailto:${resume.profile.email}`">
              <span class="contact-link">{{resume.profile.email}}</span>
              <span class="iconfont">
                <svg width="16px" height="16px" viewBox="0 0 1024 1024">
                  <path d="M903.808 239.04l-818.304 0 0 545.92 852.992 0 0-545.92-34.688 0zM869.664 273.152l-329.536 329.536c-15.04 15.04-41.248 15.04-56.288 0l-329.6-329.536 715.392 0zM119.616 286.752l221.536 221.504-221.536 221.536 0-443.072zM146.848 750.848l218.464-218.432 94.432 94.4c13.952 13.952 32.512 21.664 52.256 21.664s38.304-7.712 52.256-21.664l94.432-94.432 218.432 218.432-730.304 0zM904.384 729.824l-221.536-221.568 221.536-221.568 0 443.136z"></path>
                </svg>
              </span>
            </a>
          </li>
        </ul>
      </section>
    </header>

    <div class="content-bd">
      <div class="content-left">
        <section class="project">
          <header class="section-hd">
            <span class="section-title-l"></span>
            <h2 class="section-title">工作经历</h2>
            <span class="section-title-r"></span>
          </header>
          <div class="workWrapper" v-for="(list,index) in resume.work" :key="index">
            <div class="section-bd">
              <header class="item-hd">
                <div>
                  <h3>{{list.company}}
                  </h3>
                </div>
                <a class="item-more new-item">
                  <span v-show="!!list.time&&list.time2" class="workTime">
                    {{list.time}}至{{list.time2}}
                  </span></a>
              </header>
              <h4 class="item-id">{{list.job}}</h4>
            </div>
            <p class="work-content">{{list.content}}</p>
          </div>

        </section>
        <section class="skill">
          <header class="section-hd">
            <span class="section-title-l"></span>
            <h2 class="section-title">技能</h2>
            <span class="section-title-r"></span>
          </header>
          <div class="section-bd">

            <!--技能:Vue-->
            <div class="item" v-for="(list,index) in resume.skills" :key="index">
              <header class="item-hd">
                <span class="item-time">{{list.name}}</span>
                <a class="btn item-more">{{list.master}}</a>
              </header>
              <div class="item-bd">
                <ul class="section-content">
                  <li v-for="(item,index) in list.content" :key="index">{{item.name}}</li>
                </ul>
              </div>
            </div>

            <!--其它-->
            <div class="item">
              <header class="item-hd">
                <span class="item-time">其它</span>
                <a class="btn item-more">其他</a>
              </header>
              <div class="item-bd">
                <ul class="section-content">
                  <li>使用git进行版本控制</li>
                  <li>了解前端工程化的相关工具,如 Webpack等</li>
                  <li>理解MVC,MVVM等设计思想</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

      </div>

      <div class="content-right">
        <section class="project">
          <header class="section-hd">
            <span class="section-title-l"></span>
            <h2 class="section-title">项目</h2>
            <span class="section-title-r"></span>
          </header>
          <div class="section-bd">
            <!--项目:VUe-->
            <div class="item" v-for="(list,index) in resume.project" :key="index">
              <header class="item-hd">
                <div>
                  <h3>{{list.projectName}}
                    &nbsp
                    <a :href="list.code" v-show="!!list.code">源码</a>
                    <a :href="list.preview" v-show="!!list.preview">预览</a></h3>
                </div>
                <a class="btn item-more">{{list.skill}}</a>
              </header>
              <div class="item-bd">
                <h4>项目介绍</h4>
                <p class="work-content">{{list.projectContent}}</p>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: ["resume"]
  };
</script>

<style lang="scss" scoped>
  $color-gray: #d1d1d1;
  $color-green: #409eff;
  $font-family: "Helvetica Neue", Helvetica, Arial, "Microsoft YaHei", sans-serif;

  a {
    text-decoration: none;
    color: $color-green;
    transition: all 0.2s ease-in-out;
  }
  ul {
    list-style: none;
  }

  .content {
    position: relative;
    width: 1024px;
    margin: 20px;
    border-radius: 5px;
    background-color: #fff;
    // box-shadow: 0 0 0 1px #eee;
    overflow: auto;
    text-align: left;
    @media screen and (max-width: 1024px) {
      width: 100%;
      margin: 0;
      border-radius: 0;
    }
  }

  .content-hd {
    width: 100%;
    padding: 30px 50px;
    color: #fff;
    background-color: $color-green;
    overflow: hidden;
    @media screen and (max-width: 720px) {
      padding: 25px 30px;
    }
    @media print {
      color: #000;
      background-color: #fff;
    }
    .title {
      width: 100%;
      border-bottom: 2px solid darken($color-green, 2%);
      font-size: 52px;
      font-weight: 300;
      overflow: hidden;
      padding-bottom: 5px;
      margin-bottom: 5px;
    }
    .name,
    .job,
    .info,
    .contact {
      width: 50%;
      @media screen and (max-width: 720px) {
        width: 100%;
        text-align: center;
      }
    }
    .name {
      float: left;
      h1 {
        font-family: "Lucida Grande", "Hiragino Sans GB", "Hiragino Sans GB W3",
          $font-family;
        font-weight: 500;
        letter-spacing: 5px;
        @media screen and (max-width: 720px) {
          letter-spacing: 0;
          line-height: 1.25;
          margin-top: 10px;
        }
        small {
          font-weight: 400;
          letter-spacing: 0;
          font-size: 24px;
          padding-left: 10px;
          @media screen and (max-width: 720px) {
            display: block;
            padding-left: 0;
            font-size: 20px;
            line-height: 1;
          }
        }
      }
    }
    .job {
      float: right;
      text-align: right;
      @media screen and (max-width: 720px) {
        text-align: center;
      }
      h2 {
        display: inline-block;
        font-size: 24px;
        @media screen and (max-width: 720px) {
          border-top: 1px solid darken($color-green, 2%);
          margin: 5px auto 0;
          padding: 10px;
        }
      }
    }
    .info {
      float: left;
      line-height: 22px;
    }
    .contact {
      float: right;
      text-align: right;
      padding-right: 5px;
      ul {
        margin: 8px 0 4px;
        @media screen and (max-width: 720px) {
          text-align: center;
          margin: 16px 0 0;
        }
        & > li {
          height: 22px;
          @media screen and (max-width: 720px) {
            display: inline-block;
          }
          & > a {
            color: #fff;
            @media print {
              color: #000;
            }
            font-family: "Lucida Grande", "Hiragino Sans GB",
              "Hiragino Sans GB W3", $font-family;
            font-size: 14px;
            line-height: 22px;
            &:hover {
              color: #e8e8e8;
            }
            .contact-link {
              @media screen and (max-width: 720px) {
                display: none;
              }
            }
            .iconfont {
              fill: #fff;
              vertical-align: text-top;
              @media screen and (max-width: 720px) {
                margin: 5px 8px;
              }
            }
          }
        }
      }
    }
  }

  .content-bd {
    width: 100%;
    min-height: 200px;
    padding: 20px 30px 50px;
    overflow: hidden;
    @media screen and (max-width: 720px) {
      padding: 20px 20px 50px;
    }
    .content-left,
    .content-right {
      width: 50%;
      @media screen and (max-width: 1024px) {
        width: 100%;
      }
    }
    .content-left {
      float: left;
    }
    .content-right {
      float: right;
    }
    section {
      overflow: hidden;
      padding: 10px 15px;
    }
    .section-hd {
      position: relative;
      height: 32px;
      margin: 10px auto 5px;
      overflow: hidden;
    }
    .section-bd {
      overflow: hidden;
      ul {
        li {
          margin-top: 8px;
          list-style: square inside;
        }
      }

      .item {
        margin-bottom: 10px;
      }
    }
    .section-title-l,
    .section-title-r {
      position: absolute;
      top: 50%;
      display: inline-block;
      width: 35%;
      height: 0;
      vertical-align: middle;
      border-top: 1px solid #ededed;
    }
    .section-title-l {
      left: 0;
    }
    .section-title-r {
      right: 0;
    }
    .section-title {
      position: relative;
      z-index: 1;
      width: 24%;
      min-width: 100px;
      margin: 0 auto;
      padding: 4px 10px;
      border-radius: 32px;
      font-size: 16px;
      font-weight: bold;
      text-align: center;
      background-color: #eee;
    }
    .section-list {
      padding: 10px 0 5px;
    }
    .item-hd {
      position: relative;
      padding: 10px 0 5px;
      line-height: 20px;
      overflow: hidden;
      font-weight: 500;
      min-height: 30px;
      .item-time {
        // display: inline-block;
        float: left;
        width: 25%;
        @media screen and (max-width: 720px) {
          width: 100%;
          margin-bottom: 5px;
        }
      }
      .item-more {
        position: absolute;
        top: 10px;
        right: 0;
        cursor: pointer;
      }
      .item-name {
        float: left;
      }
    }
    .item-bd {
      margin-bottom: 5px;
    }
    .item-des {
      margin-bottom: 16px;
    }
    .section-content {
      text-align: justify;
      word-break: break-all;
      line-height: 22px;
      em {
        display: inline-block;
        font-family: Menlo, $font-family;
        font-size: 12px;
        line-height: 14px;
        border: 1px solid $color-gray;
        border-radius: 3px;
        margin: 2px;
        padding: 0 3px;
        background-color: #f7f7f7;
      }
      strong {
        font-family: $font-family;
        font-size: 12px;
        line-height: 14px;
        border: 1px solid #f3f3f3;
        border-radius: 3px;
        font-weight: 500;
        color: #444;
        margin: 2px;
        padding: 0 3px;
        background-color: #f6f6f6;
      }
    }
    .practice {
      .item-time {
        width: 100%;
      }
    }
  }

  .btn {
    display: inline-block;
    padding: 0 5px;
    border: 1px solid $color-green;
    border-radius: 3px;
    color: $color-green;
    font-family: Menlo, $font-family;
    font-size: 14px;
    line-height: 18px;
    text-align: center;
    &:hover {
      color: #fff;
      background-color: $color-green;
    }
  }
  .company {
    margin-right: 5em;
  }
  .work-content {
    margin-top: 5px;
  }
  .new-item {
    color: #444;
  }
</style>
