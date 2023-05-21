import React from 'react'
import './Home.css';
import Typewriter from './Typewriter';

// import images
import myimg from '../assets/image/rp1-removebg-preview.png'
import s1 from '../assets/image/proectpic/s1.jpg'
import s2 from '../assets/image/proectpic/s2.jpg'
import s3 from '../assets/image/proectpic/s3.jpg'
import b3 from '../assets/image/proectpic/b3.jpg'
import b2 from '../assets/image/proectpic/b2.jpg'
import b1 from '../assets/image/proectpic/b1.jpg'
import j1 from '../assets/image/proectpic/j1.jpg'
import j2 from '../assets/image/proectpic/j2.jpg'
import j3 from '../assets/image/proectpic/j3.jpg';




export const Home = () => {
  const color1='rgb(47,207,15)';
  const customColor = 'rgb(10, 25, 47)';

  return (
    <div style={{backgroundColor:customColor}}>Home
       <div>
        

        <br id="home"/><br/><br/>
        <div class="container text-center mt-5">
            <img class="rounded-circle " src={myimg} width="300px" height="300px"
                alt="Image"/>
            <br/><br/>
            <h3 style={{color:'white'}} class="wow animate__animated animate__flipInX" data-wow-duration="20s"
                data-wow-delay="1s">Hi, This Is <strong style={{color:color1}}>MD MOSTAK
                    AHMED</strong>
            </h3>
            <h3 style={{color:'white'}} >I'm <Typewriter text=" Web Devloper" /> <spanc class="auto-type"></spanc>
            </h3>
            <a class="btn btn-outline-success text-white"
                href="https://drive.google.com/file/d/1Zevhx7Oyqp_Qy974QsFHXrFjRghcyhWz/view?usp=sharing"
                target="_blank" download rel="noopener noreferrer">Download Resume</a>



        </div>
        <h1 id="about"></h1>
        <br/><br/><br/>
        <div class="container-xl text-white" style={{textAlign:'justify'}} >
            <h2>About:</h2>
            <h4>Designer: </h4>
            <p>
                Historically, the main area of design was regarded as only architecture, which was understood as the
                major
                art. The design of clothing, furniture, and other common artifacts were left mostly to tradition or
                artisans
                specializing in hand making them.

                With the increasing complexity in industrial design of today's society, and due to the needs of mass
                production where more time is usually associated with more cost, the production methods became more
                complex
                and with them, the way designs and their production are created. The classical areas are now subdivided
                into
                smaller and more specialized domains of design (landscape design, urban design, interior design,
                industrial
                design, furniture design, fashion design, and much more) according to the product designed or perhaps
                its
                means of production. Despite the variety of specializations within the design industry, all of them have
                similarities in terms of the approach, skills, and methods of working.

                Using design methods and design thinking to resolve problems and create new solutions are the most
                important
                aspects of being a designer. Part of a designer's job is to get to know the audience they intend on
                serving.

                In education, the methods of teaching or the program and theories followed vary according to schools and
                field of study. In industry, a design team for large projects is usually composed of a number of
                different
                types of designers and specialists. The relationships between team members will vary according to the
                proposed product, the processes of production or the research followed during the idea development, but
                normally they give an opportunity to everyone in the team to take a part in the creation process.
            </p>
            <h4>Developer:</h4>
            <p>There are no formal educational or license requirements to become a web developer. However, many colleges
                and
                trade schools offer coursework in web development. There are also many tutorials and articles which
                teach
                web development, often freely available on the web - for example, on JavaScript.

                Even though there are no formal requirements, web development projects require web developers to have
                advanced knowledge and skills such as:
            <ul>
                <li>HTML, CSS, and JavaScript</li>
                <li>Server/client side architecture like all or some of the above mentioned</li>
                <li> Programming/coding/scripting in one of the many server-side languages or frameworks (e.g., Perl,
                    Python, Ruby, PHP, Go, Java, ASP.NET, Node.js)</li>
                <li> Ability to utilize a database</li>
                <li>Creating single page application with the use of front-end tools such as Vue, React.js or Angular
                </li>
            </ul>
            </p>
            <h4>Programmer:</h4>
            <p>
                The computer programmer, sometimes referred to as a software developer, a software engineer, a
                programmer or
                a coder, is a person who creates computer programs — often for larger computer software.

                The programmer is someone who writes/creates computer software or applications by providing a specific
                programming language to the computer. Most programmers have extensive computing and coding experience in
                many varieties of programming languages and platforms, such as Structured Query Language (SQL), Perl,
                Extensible Markup Language (XML), PHP, HTML and Java.

                The programmer's most often-used computer language (e.g., Assembly, JavaScript, Lisp, Python, Java,
                etc.)
                may be prefixed to the aforementioned terms. Some who work with web programming languages may also
                prefix
                their titles with web.
            </p>
        </div>
        <br id="project"/><br/><br/> <br/>

        <div class="container-xl">
            <h2 class="text-white">Project:</h2>

            <div class="row ">
                <div class="col-4">
                    <div class="card h-100">
                        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src={s1} class="d-block w-100" alt="..."/>
                                </div>
                                <div class="carousel-item">
                                    <img src={s2} class="d-block w-100" alt="..."/>
                                </div>
                                <div class="carousel-item">
                                    <img src={s3} class="d-block w-100" alt="..."/>
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button"
                                data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button"
                                data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                        <div class="card-body">
                            <h4 class="card-title">Student Result Management System</h4>
                            <p class="card-text">Student Result Management System Allows Students To Check View And See
                                Their Results Online Using Their Login Credentials. You Can Select Result Templates For
                                Your
                                School, Educational Institute, University. Online Software Also Allows Educational
                                Institutes To Hold The Results Of Unpaid Students.</p>
                        </div>
                        <div class="card-footer">

                        </div>
                    </div>
                </div>
                <div class="col-4">
                    <div class="card h-100">
                        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src={b1} class="d-block w-100" alt="..."/>
                                </div>
                                <div class="carousel-item">
                                    <img src={b2} class="d-block w-100" alt="..."/>
                                </div>
                                <div class="carousel-item">
                                    <img src={b3} class="d-block w-100" alt="..."/>
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button"
                                data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button"
                                data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                        <div class="card-body">
                            <h4 class="card-title">Online Code Editor (Bootstrap)</h4>
                            <p class="card-text">
                                Bootstrap is one of the most popular frontend framework for web development. It has pre
                                define CSS style and JS bundle for faster web page development.

                                This tool is using bootstrap version v5.2

                                You can select or search top most used code snippets and see the result. You also can
                                write your own custom code in text editor and run code on fly.</p>
                        </div>
                        <div class="card-footer">

                        </div>
                    </div>
                </div>
                <div class="col-4">
                    <div class="card h-100">
                        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src={j1} class="d-block w-100" alt="..."/>
                                </div>
                                <div class="carousel-item">
                                    <img src={j2} class="d-block w-100" alt="..."/>
                                </div>
                                <div class="carousel-item">
                                    <img src={j3} class="d-block w-100" alt="..."/>
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button"
                                data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button"
                                data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                        <div class="card-body">
                            <h4 class="card-title">Web Development With Javascript</h4>
                            <p class="card-text">JavaScript is one of the most popular modern web technologies! As your
                                JavaScript skills grow, your websites will enter a new dimension of power and
                                creativity. However, getting comfortable with JavaScript is more challenging than
                                getting comfortable with HTML and CSS</p>
                        </div>
                        <div class="card-footer">

                        </div>
                    </div>
                </div>



            </div>

        </div>
    </div>
    </div>
  )
}
export default Home;