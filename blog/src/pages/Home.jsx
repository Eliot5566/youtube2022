import React from 'react';
// import './Home.css';
import { Link } from 'react-router-dom';

const posts = [
  {
    id: 1,
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
    desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!',
    img: 'https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 2,
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
    desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!',
    img: 'https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 3,
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
    desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!',
    img: 'https://images.pexels.com/photos/4230630/pexels-photo-4230630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 4,
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
    desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!',
    img: 'https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
];
const Home = () => {
  return (
    <div className="home">
      <div className="posts">
        {posts.map((p) => (
          <div className="post" key={posts.id}>
            <div className="img">
              <img src={p.img} alt="" />
              <div className="bg"></div>
            </div>
            <div className="post-info">
              <Link to={`/post/$(p.id)`} className="link">
                <h1 className="post-title">{p.title}</h1>
              </Link>
              <p>{p.desc}</p>
              <button className="read">Read More</button>
              <hr />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
