import './Ostav.css';
import React from "react";
import Ostavki from "./Ostavki";

class Ostav extends React.Component {
    constructor(props) {
        super(props);
        this.OstavZayav = this.OstavZayav.bind(this);
        this.NeOstavZayav = this.NeOstavZayav.bind(this);
        this.state = {isOstavIn: false};
    }

    OstavZayav() {
        this.setState({isOstavIn: true});
    }

    NeOstavZayav() {
        this.setState({isOstavIn: false});
    }

    render() {
        const isOstavIn = this.state.isOstavIn;
        let button;

        if (isOstavIn) {
            button = <NeOstav onClick={this.NeOstavZayav} />;
        } else {
            button = <Ostav1 onClick={this.OstavZayav} />;
        }

        return (
            <div>
                <p className="text">Ваше имя:</p>
                <input className="input"/>
                <p className="text1">Ваш возраст:</p>
                <input className="input1"/>
                <p className="text2">Ваш электронный адрес:</p>
                <input className="input2"/>
                <Greeting isOstavIn={isOstavIn} />
                {button}

                <Ostavki name="User" message="⚡Один из разработчиков Call of Duty показал, как может выглядеть Fallout 4
            на движке Unreal Engine 5. Эти кадры показал художник по окружению Эндрю Геберт"/>
                <Ostavki name="User1" message="Ничто так не выдает человека, как то, над чем он смеётся."/>
                <Ostavki name="User2" message="Иногда момент, который ты так долго ждал, приходит в самое неподходящее время..."/>
                <Ostavki name="User3" message="Самое худшее, когда нужно ждать и не можешь ничего сделать. От этого можно сойти с ума."/>
            </div>
        );
    }
}
function UserGreeting(props) {
    return <h1 className="success_ostav">Вы успешно оставили заявку</h1>;
}

function GuestGreeting(props) {
    return <h1 className="tag_ostav">Оставить заявку</h1>;
}

function Greeting(props) {
    const isOstavIn = props.isOstavIn;
    if (isOstavIn) {
        return <UserGreeting />;
    }
    return <GuestGreeting />;
}

function Ostav1(props) {
    return (
        <button className="button" onClick={props.onClick}>
            Оставить заявку
        </button>
    );
}

function NeOstav(props) {
    return (
        <button className="button" onClick={props.onClick}>
            Вы оставили заявку
        </button>
    );
}

export default Ostav;