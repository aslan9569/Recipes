import React from 'react';
import classes from './news.module.css';
import NewsCard from './NewsCard'

function News (props) {
  const news = [
    {
      id:1,
      text: 'Врач рассказала, дефицит какого вещества грозит ишемической болезнью',
      img: 'https://cdnn21.img.ria.ru/images/07e5/02/1a/1599131545_0:0:3159:1778_436x0_80_0_0_a9e00c382964511215ed53252814d30f.jpg.webp',
      site: 'https://rsport.ria.ru/20220124/zdorove-1769170831.html'
    },
    {
      id:2,
      text: 'Россиянам объяснили, как правильно есть гречку',
      img: 'https://cdnn21.img.ria.ru/images/07e5/09/1e/1752565928_0:98:3291:1949_436x0_80_0_0_28438fcf41aa6d87fc68b5b1d0be4d5b.jpg.webp',
      site: 'https://rsport.ria.ru/20220124/grechka-1769134188.html'
    },
    {
      id:3,
      text: 'Врач назвала ошибки в лечении имбирем',
      img: 'https://cdnn21.img.ria.ru/images/98391/41/983914140_0:230:2000:1355_436x0_80_0_0_cc735dfa267012a96d74166d05d5e5c6.jpg.webp',
      site: 'https://ria.ru/20220122/imbir-1769010510.html'
    },
    {
      id:4,
      text: 'Врач предупредила, с какими лекарствами нельзя сочетать имбирь',
      img: 'https://cdnn21.img.ria.ru/images/30795/59/307955996_0:175:2964:1842_436x0_80_0_0_c02e5de902c5050ac7b4fb35391e41f9.jpg.webp',
      site: 'https://radiosputnik.ria.ru/20220122/imbir-1768892718.html'
    },
    {
      id:5,
      text: 'Названы самые популярные в России регионы для гастрономического туризма',
      img: 'https://cdnn21.img.ria.ru/images/07e5/07/17/1742511482_0:157:3048:1873_436x0_80_0_0_84b4dd6d34fe9c01f62a84f528c9296a.jpg.webp',
      site: 'https://ria.ru/20220121/gurmany-1768872595.html'
    }
  ]




  return (
    <div className={classes.container}>
      <h1>Новости еды</h1>
      {news.map(item => {
        return <NewsCard news={item} key={item.id} />
      })}
    </div>
  )
}

export default News