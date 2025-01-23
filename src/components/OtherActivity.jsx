import React from 'react'
import ContentCard from './ContentCard';

const contents = [
    {
      title: "처절한 블라인드 소개팅 데이트",
      author: "Jaedon Lee (BumpEast)",
      cover: "/assets/activities/blind_date_thumbnail_final.jpg",
      video: "https://www.youtube.com/watch?v=7ts34mXUF_s",
    },
    {
      title: "개노답 몸치들의 처절한 뉴진스 How Sweet 안무 커버 배틀",
      author: "Jaedon Lee (BumpEast)",
      cover: "/assets/activities/dance_thumbnail_final.jpg",
      video: "https://www.youtube.com/watch?v=0YG217oSzF4",
    },
    {
      title: "뉴욕 폐급 서빙 알바 브이로그 (혈압주의)",
      author: "Jaedon Lee (BumpEast)",
      cover:
        "/assets/activities/beer_garden_thumbnail_final2.jpg",
      video: "https://www.youtube.com/watch?v=MhpV1_j5IR4",
    },
    {
      title: "먹는순간 눈앞이 흑백으로 변하는 개노답 요리대결",
      author: "Jaedon Lee (BumpEast)",
      cover:
        "/assets/activities/black_white_thumbnail_final.jpg",
      video: "https://www.youtube.com/watch?v=qlyHiT2QGPg",
    },
    {
      title: "눈 떠보니 자동차가 털려있다",
      author: "Jaedon Lee (BumpEast)",
      cover: "/assets/activities/car_stolen_thumbnail.jpg",
      video: "https://www.youtube.com/watch?v=LdhhOHD3E54",
    },
    {
      title: "뉴욕 길거리 음식 전쟁! 할랄가이즈 vs 아델스 페이머스 할랄",
      author: "Jaedon Lee (BumpEast)",
      cover:
        "/assets/activities/halal_thumb.jpg",
      video: "https://www.youtube.com/watch?v=DlsAysI0Duc",
    },
    {
      title: "패알못들의 뉴욕 초저가 쇼핑",
      author: "Jaedon Lee (BumpEast)",
      cover:
        "/assets/activities/fashion_week_thumb_final.jpg",
      video: "https://www.youtube.com/watch?v=Shwv3m_bdrE",
    },
    {
      title: "어딘가 살짝 이상한 마사지",
      author: "Jaedon Lee (BumpEast)",
      cover:
        "/assets/activities/jackson_height_thumb2.jpg",
      video: "https://www.youtube.com/watch?v=4fRoEjlcwkE",
    },
    {
      title: "뉴욕 빈티지 다이너에서 정국 노래를 틀어보았다!",
      author: "Jaedon Lee (BumpEast)",
      cover:
        "/assets/activities/diner_thumbnail_final.jpg",
      video: "https://www.youtube.com/watch?v=-n6jcFufYOU",
    },
    {
      title: "마약이 판을 친다! 심각한 뉴욕 지하철 상태",
      author: "Jaedon Lee (BumpEast)",
      cover:
        "/assets/activities/subway_thumbnail_final_2.jpg",
      video: "https://www.youtube.com/watch?v=lsXxU6Nvt2w",
    },
];

const OtherActivity = () => {
  return (
    <section id='ytVideos' className='section'>
      <div className='container'>
        <h2 className='headline-2 mb-8 reveal-up'>
          BumpEast (YouTube)
        </h2>

        <ul className='content-list'>
        {/* <ul className='flex items-stretch gap-3 w-fit'> */}
          {contents.map((content) => (
            <ContentCard key={content.title} title={content.title} author={content.author} cover={content.cover} video={content.video} classes="reveal-up" />
          ))}
        </ul>
      </div>
    </section>
  )
}

export default OtherActivity