import React from "react";
import "./Like.css"
import like from "./public/icon-like.svg";
import likeRed from "./public/icon-like-red.svg";

class Like extends React.Component {
    state = {
        likes: 0
    };


    addLike = () => {
        let newCount = this.state.likes + 1;
        this.setState({
            likes: newCount
        });
    };

    render() {
        const likes = this.state.likes;
        if (likes === 0) {
            return (
                <div className="like">
                    <button className="like__button" onClick={this.addLike}>
                        <img className="like__img" src={like}/>
                        {""}
                        {likes}
                    </button>
                </div>
            );
        }
        if (likes === 1) {
            return (
                <div className="like">
                    <button className="like__button" onClick={this.addLike}>
                        <img className="like__img like__img_liked" src={likeRed}/>
                        {""}
                        {likes}
                    </button>
                </div>
            );
        }
        if (likes > 1) {
            return (
                <div>
                    <button className="like__button" onClick={this.addLike}>
                        <img className="like__img like__img_liked" src={likeRed}/>
                        {""}
                        {likes}
                    </button>
                </div>
            );
        }
    }
}


export default Like;