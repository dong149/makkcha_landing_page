import React from "react";
import "./App.css";
import AOS from 'aos';
class App extends React.Component{
  componentDidMount(){
    AOS.init();
    let availHeight = window.screen.availHeight;
      let flag = true;
      function handleScrollListener() {
        if (window.scrollY >= availHeight * 0.6 && flag) {
          let i = 0;
          let j = 0;
          let k = 0;
          let theLabel1 = document.getElementById("userCounter");
          let theLabel2 = document.getElementById("searchCounter");
          let theLabel3 = document.getElementById("timeCounter");

          // userCounter
          let interval1 = setInterval(function() {
            if (i == 7537) clearInterval(interval1);
            theLabel1.innerHTML = i
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            if (i < 800) i += 100;
            else if (i < 1200) i += 100;
            else if (i < 1400) i += 100;
            else if (i < 7400) i += 100;
            else i++;
          }, 1);

          // searchCounter
          let interval2 = setInterval(function() {
            if (j == 400220) clearInterval(interval2);
            theLabel2.innerHTML = j
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            if (j < 200000) j += 100000;
            else if (j < 400000) j += 100000;
            else j += 10;
          }, 1);

          // timeCounter
          let interval3 = setInterval(function() {
            if (k == 3) clearInterval(interval3);
            theLabel3.innerHTML = k
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            k++;
          }, 100);
          flag = false;
        }
      }

      window.addEventListener("scroll", handleScrollListener);
      window.addEventListener("scroll", () => {
       // if (window.scrollY < availHeight) flag = true;
      });
  };
  render(){
   return(
   
    <div className="container">
      <div className="conA">
        <div className="icon-centered">
          <img className="icon-img" alt="Appicon" src="/images/app_icon.png" />
        </div>
        <div className="text-main">
          <p class="text-light">잠깐, 막차 몇시야?</p>
        </div>
        <div
          class="badge-container"
          data-aos="fade-up"
          data-aos-delay="400"
          data-aos-duration="1600"
        >
          <a
            class="anchor"
            href="https://apps.apple.com/kr/app/%EB%A7%89%EC%B0%A8/id1480522844"
          >
            <img class="badge-img" alt="icon" src="/images/ios-large.png" />
          </a>
          <a
            class="anchor"
            href="https://play.google.com/store/apps/details?id=com.native_makkcha"
          >
            <img class="badge-img" alt="icon" src="/images/android.png" />
          </a>
        </div>
        <div className="youtube-centered">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/lNCIfRNAK1A"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        
        <div class="mock-con">
          <img
            class="mock-img"
            alt="icon"
            data-aos="fade-up"
            data-aos-delay="600"
            data-aos-duration="1000"
            src="/images/mock_img.png"
          />
        </div>
      </div>

      <div class="conB">
        <div class="counter-container">
          {/* <!-- User Counter --> */}
          <div
            class="counter-inner"
            data-aos="slide-up"
            data-aos-offset="0"
            data-aos-duration="500"
          >
            <div>
              <span id="userCounter" class="counter-main-text"></span>
              <span class="counter-main-text">명</span>
            </div>

            <p class="counter-sub-text">사용자 수</p>
          </div>
          {/* <!-- Search Counter --> */}
          <div
            class="counter-inner"
            data-aos="slide-up"
            data-aos-offset="0"
            data-aos-duration="500"
          >
            <div>
              <span id="searchCounter" class="counter-main-text"></span>
              <span class="counter-main-text">건</span>
            </div>

            <p class="counter-sub-text">서비스 뷰 수</p>
          </div>
          {/* <!-- Time Counter --> */}
          <div
            class="counter-inner"
            data-aos="slide-up"
            data-aos-offset="0"
            data-aos-duration="500"
          >
            <div>
              <span id="timeCounter" class="counter-main-text"></span>
              <span class="counter-main-text">초</span>
            </div>

            <p class="counter-sub-text">검색 소요 시간</p>
          </div>
        </div>
        {/* <!-- Service Info --> */}
        <div
          class="card-container card-text"
          data-aos="fade-up"
          data-aos-duration="1600"
        >
          <h1 class="counter-main-text">막차는 어떤 앱인가요?</h1>
          <div class="card-inner card-inner-text">
            <h3 class="counter-sub-text">막차를 알려드립니다!</h3>
            <p>
              서울 경기 인천의 교통 빅데이터를 기반으로 버스와 지하철 환승까지
              고려해 막차까지 남은 시간을 계산해 알려드립니다.
            </p>
            <div>
              <img class="card" alt="icon" src="/images/bus_card.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
   }
}

export default App;
