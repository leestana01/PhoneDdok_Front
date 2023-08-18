import Logo from "../src/img/logo.png";

const Loading = () => {
    return (
        <div className="Loading">
            <div className="container">
                <img className="logoImage" src={Logo}></img>
                <div>
                    <p>
                        스마트<span className="title_color">폰 똑</span>똑하게
                        쓰기
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Loading;
