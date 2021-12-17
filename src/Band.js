import React, { Component } from 'react';
import './Band.css';
import Card from './Card';

const commentList = [
    {
        name: 'Jake Palmer',
        tag: '@JakePalmer',
    },
    {
        name: 'Jake Palmer',
        tag: '@JakePalmer',
    },
]
// const commentList = [
//     {
//         name: 'John Smith',
//         tag: '@johnsmith',
//         comment: 'This is a comment'
//     },
//     {
//         name: 'Jack White',
//         tag: '@jackwhite'
//     },
//     {
//         name: 'Jake Hill',
//         tag: '@jakehill'
//     },
//     {
//         name: 'Kellin Quinn',
//         tag: '@kellinquinn'
//     },
//     {
//         name: 'Travis Barker',
//         tag: '@travisbarker'
//     },
//     {
//         name: 'Mike Smith',
//         tag: '@mikesmith'
//     },
//     {
//         name: 'Rome Bell',
//         tag: '@romebell'
//     },
//     {
//         name: 'Oliver Sykes',
//         tag: '@olisykes'
//     },
//     {
//         name: 'Eminem',
//         tag: '@eminem'
//     },
//     {
//         name: 'Hardy',
//         tag: '@hardy'
//     },
// ]

const displayCommentList = commentList.map((c, idx) => {
    return (
        <Card key={idx} index={idx} name={c.name} user={c.tag} />
    );
});

class Band extends Component {

    render() {
        return (
            <div>
                <nav className="navbar is-dark">
                    <div className="navbar-brand">
                        <a className="navbar-item" href="https://bulma.io">
                            <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" />
                        </a>
                        <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>

                    <div id="navbarExampleTransparentExample" className="navbar-menu">
                        <div className="navbar-start">
                            <a className="navbar-item" href="https://bulma.io/">
                                Home
                            </a>
                            <a className="navbar-item" href="https://bulma.io/">
                                Band
                            </a>
                            <a className="navbar-item" href="https://bulma.io/">
                                Tour
                            </a>
                            <a className="navbar-item" href="https://bulma.io/">
                                Contact
                            </a>
                            <div className="navbar-item has-dropdown is-hoverable">
                                <a className="navbar-link" href="/documentation/overview/start/">
                                    More
                                </a>
                                <div className="navbar-dropdown is-boxed">
                                    <a className="navbar-item" href="/documentation/overview/start/">
                                        Mechandise
                                    </a>
                                    <a className="navbar-item" href="https://bulma.io/documentation/modifiers/syntax/">
                                        Extras
                                    </a>
                                    <a className="navbar-item" href="https://bulma.io/documentation/columns/basics/">
                                        Media
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="navbar-end">
                            <div className="navbar-item">
                                <div className="field">
                                    <div className="control">
                                        <input className="input" type="text" placeholder="Search . . ." />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>

                <section className="hero">
                    <figure className="image">
                        <img src="https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt='' />
                    </figure>
                </section>

                <section className="section">
                    <div className="container has-text-centered">
                        {/* <h1>{commentList.name}</h1> */}
                        <p>We have created a fictional band website. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                            laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

                        <div className="columns is-centered" style={{ padding: "2rem" }}>
                            <div className="column">
                                <Card index={99} name={commentList.name} user={commentList.tag} />
                            </div>
                            <div className="column">
                                <div className="card">
                                    <div className="card-image">
                                        <figure className="image is-2by1">
                                            <img src="https://images.pexels.com/photos/167635/pexels-photo-167635.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
                                        </figure>
                                    </div>
                                    <div className="card-content">
                                        <div className="media">
                                            <div className="media-content">
                                                <p className="title is-4">John Smith</p>
                                                <p className="subtitle is-6">@johnsmith</p>
                                            </div>
                                        </div>

                                        <div className="content">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
                                            <a>@bulmaio</a>.
                                            <a href="#">#css</a>
                                            <a href="#">#responsive</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="column">
                                <div className="card">
                                    <div className="card-image">
                                        <figure className="image is-2by1">
                                            <img src="https://images.pexels.com/photos/167635/pexels-photo-167635.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Placeholder image" />
                                        </figure>
                                    </div>
                                    <div className="card-content">
                                        <div className="media">
                                            <div className="media-content">
                                                <p className="title is-4">John Smith</p>
                                                <p className="subtitle is-6">@johnsmith</p>
                                            </div>
                                        </div>

                                        <div className="content">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
                                            <a>@bulmaio</a>.
                                            <a href="#">#css</a>
                                            <a href="#">#responsive</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section >

                <section className="section">
                    <div className="container has-text-centered">
                        <h2 className="title">Tour Dates</h2>

                        <div className="tile is-ancestor">
                            <div className="tile is-parent">
                                <article className="tile is-child box">
                                    <figure className="image">
                                        <img src="https://images.pexels.com/photos/374710/pexels-photo-374710.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt='' />
                                    </figure>
                                    <p className="title">New York</p>
                                    <p className="subtitle">Fri 27 Nov 2016</p>
                                    <a className="button">Buy Tickets</a>
                                </article>
                            </div>
                            <div className="tile is-parent">
                                <article className="tile is-child box">
                                    <figure className="image">
                                        <img src="https://images.pexels.com/photos/374710/pexels-photo-374710.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt='' />
                                    </figure>
                                    <p className="title">New York</p>
                                    <p className="subtitle">Fri 27 Nov 2016</p>
                                    <a className="button">Buy Tickets</a>
                                </article>
                            </div>
                            <div className="tile is-parent">
                                <article className="tile is-child box">
                                    <figure className="image">
                                        <img src="https://images.pexels.com/photos/374710/pexels-photo-374710.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt='' />
                                    </figure>
                                    <p className="title">New York</p>
                                    <p className="subtitle">Fri 27 Nov 2016</p>
                                    <a className="button">Buy Tickets</a>
                                </article>
                            </div>
                            <div className="tile is-parent">
                                <article className="tile is-child box">
                                    <figure className="image">
                                        <img src="https://images.pexels.com/photos/374710/pexels-photo-374710.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt='' />
                                    </figure>
                                    <p className="title">New York</p>
                                    <p className="subtitle">Fri 27 Nov 2016</p>
                                    <a className="button">Buy Tickets</a>
                                </article>
                            </div>
                            <div className="tile is-parent">
                                <article className="tile is-child box">
                                    <figure className="image">
                                        <img src="https://images.pexels.com/photos/374710/pexels-photo-374710.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt='' />
                                    </figure>
                                    <p className="title">New York</p>
                                    <p className="subtitle">Fri 27 Nov 2016</p>
                                    <a className="button">Buy Tickets</a>
                                </article>
                            </div>
                        </div>

                        <div className="tile is-ancestor">
                            <div className="tile is-parent">
                                <article className="tile is-child box">
                                    <figure className="image">
                                        <img src="https://images.pexels.com/photos/374710/pexels-photo-374710.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt='' />
                                    </figure>
                                    <p className="title">New York</p>
                                    <p className="subtitle">Fri 27 Nov 2016</p>
                                    <a className="button">Buy Tickets</a>
                                </article>
                            </div>
                            <div className="tile is-parent">
                                <article className="tile is-child box">
                                    <figure className="image">
                                        <img src="https://images.pexels.com/photos/374710/pexels-photo-374710.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt='' />
                                    </figure>
                                    <p className="title">New York</p>
                                    <p className="subtitle">Fri 27 Nov 2016</p>
                                    <a className="button">Buy Tickets</a>
                                </article>
                            </div>
                            <div className="tile is-parent">
                                <article className="tile is-child box">
                                    <figure className="image">
                                        <img src="https://images.pexels.com/photos/374710/pexels-photo-374710.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt='' />
                                    </figure>
                                    <p className="title">New York</p>
                                    <p className="subtitle">Fri 27 Nov 2016</p>
                                    <a className="button">Buy Tickets</a>
                                </article>
                            </div>
                            <div className="tile is-parent">
                                <article className="tile is-child box">
                                    <figure className="image">
                                        <img src="https://images.pexels.com/photos/374710/pexels-photo-374710.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt='' />
                                    </figure>
                                    <p className="title">New York</p>
                                    <p className="subtitle">Fri 27 Nov 2016</p>
                                    <a className="button">Buy Tickets</a>
                                </article>
                            </div>
                            <div className="tile is-parent">
                                <article className="tile is-child box">
                                    <figure className="image">
                                        <img src="https://images.pexels.com/photos/374710/pexels-photo-374710.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt='' />
                                    </figure>
                                    <p className="title">New York</p>
                                    <p className="subtitle">Fri 27 Nov 2016</p>
                                    <a className="button">Buy Tickets</a>
                                </article>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section">
                    <div className="container has-text-centered">
                        <h2 className="title">Contact</h2>

                        <form>
                            <div className="field is-horizontal">
                                <div className="field-body">
                                    <div className="field">
                                        <p className="control has-icons-left">
                                            <input className="input" type="text" placeholder="Name" />
                                            <span className="icon is-small is-left">
                                                <i className="fas fa-user"></i>
                                            </span>
                                        </p>
                                    </div>
                                    <div className="field">
                                        <p className="control has-icons-left has-icons-right">
                                            <input className="input" type="email" placeholder="Email" />
                                            <span className="icon is-small is-left">
                                                <i className="fas fa-envelope"></i>
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="field is-horizontal">
                                <div className="field-body">
                                    <div className="field">
                                        <div className="control">
                                            <textarea className="textarea" placeholder="Message us"></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="field is-horizontal">
                                <div className="field-body">
                                    <div className="field">
                                        <div className="control">
                                            <button className="button is-primary">
                                                Send message
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                        {displayCommentList}
                    </div>
                </section>

                <footer className="footer">
                    <div className="container">
                        <div className="content has-text-centered">
                            <p>
                                <a href="">
                                    <i className="fab fa-facebook-square fa-2x"></i>
                                </a>
                                <a href="">
                                    <i className="fab fa-twitter-square fa-2x"></i>
                                </a>
                                <a href="">
                                    <i className="fab fa-instagram fa-2x"></i>
                                </a>
                                <a href="">
                                    <i className="fab fa-snapchat fa-2x"></i>
                                </a>
                            </p>
                            <p>
                                <a href="https://bulma.io">
                                    <img src="https://bulma.io/images/made-with-bulma.png" alt="Made with Bulma" width="128" height="24" alt='' />
                                </a>
                            </p>
                        </div>
                    </div>
                </footer>
            </div >
        );
    }
}

export default Band;