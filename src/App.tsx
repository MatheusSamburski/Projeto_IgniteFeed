import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';
import './global.css';

/*-------------------------------lista com objetos dos comentarios----------------------------------*/
const posts = [
  {
    id: 1,
    author:{
      avatarUrl: 'https://github.com/MatheusSamburskiGrendene.png',
      name: 'Matheus Samburski',
      role: 'Web Developer',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: '👉 jane.design/doctorcare'},      
    ],
    publishedAt: new Date('2022-09-30 08:08:30'),
  },
  {
    id: 2,
    author:{
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Rocket',
      role: 'Educator Rocketseat',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: '👉 jane.design/doctorcare'},      
    ],
    publishedAt: new Date('2022-09-30 08:08:30'),
  },
];     
/*-------------------------------lista com objetos dos comentarios----------------------------------*/


export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
          <main>
            {posts.map(post => {
              return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
              )
            })}
          </main>
      </div>
    </div>
  )
}


