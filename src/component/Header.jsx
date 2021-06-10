import React from 'react';

export default function Header() {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="/"><h4>3D Web</h4></a>
                    <button
                        class="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/box">Squre Model</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/objmodel">OBJ Model</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/gldmodel">GLD Model</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}