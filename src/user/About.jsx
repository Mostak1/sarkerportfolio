import React from "react";
import { FaAddressBook, FaFacebook } from "react-icons/fa";
import "./Home.css";
export const About = () => {
  // const customColor = "rgb(10, 25, 47)";
  return (
    <div className="about">
      <div class="container-xl text-dark" style={{ textAlign: "justify" }}>
        <h2>About:</h2>
        <h4>Designer: </h4>
        <p>
          Historically, the main area of design was regarded as only
          architecture, which was understood as the major art. The design of
          clothing, furniture, and other common artifacts were left mostly to
          tradition or artisans specializing in hand making them. With the
          increasing complexity in industrial design of today's society, and due
          to the needs of mass production where more time is usually associated
          with more cost, the production methods became more complex and with
          them, the way designs and their production are created. The classical
          areas are now subdivided into smaller and more specialized domains of
          design (landscape design, urban design, interior design, industrial
          design, furniture design, fashion design, and much more) according to
          the product designed or perhaps its means of production. Despite the
          variety of specializations within the design industry, all of them
          have similarities in terms of the approach, skills, and methods of
          working. Using design methods and design thinking to resolve problems
          and create new solutions are the most important aspects of being a
          designer. Part of a designer's job is to get to know the audience they
          intend on serving. In education, the methods of teaching or the
          program and theories followed vary according to schools and field of
          study. In industry, a design team for large projects is usually
          composed of a number of different types of designers and specialists.
          The relationships between team members will vary according to the
          proposed product, the processes of production or the research followed
          during the idea development, but normally they give an opportunity to
          everyone in the team to take a part in the creation process.
        </p>
        <h4>Developer:</h4>
        <p>
          There are no formal educational or license requirements to become a
          web developer. However, many colleges and trade schools offer
          coursework in web development. There are also many tutorials and
          articles which teach web development, often freely available on the
          web - for example, on JavaScript. Even though there are no formal
          requirements, web development projects require web developers to have
          advanced knowledge and skills such as:
          <ul>
            <li>HTML, CSS, and JavaScript</li>
            <li>
              Server/client side architecture like all or some of the above
              mentioned
            </li>
            <li>
              {" "}
              Programming/coding/scripting in one of the many server-side
              languages or frameworks (e.g., Perl, Python, Ruby, PHP, Go, Java,
              ASP.NET, Node.js)
            </li>
            <li> Ability to utilize a database</li>
            <li>
              Creating single page application with the use of front-end tools
              such as Vue, React.js or Angular
            </li>
          </ul>
        </p>
        <h4>Programmer:</h4>
        <p>
          The computer programmer, sometimes referred to as a software
          developer, a software engineer, a programmer or a coder, is a person
          who creates computer programs — often for larger computer software.
          The programmer is someone who writes/creates computer software or
          applications by providing a specific programming language to the
          computer. Most programmers have extensive computing and coding
          experience in many varieties of programming languages and platforms,
          such as Structured Query Language (SQL), Perl, Extensible Markup
          Language (XML), PHP, HTML and Java. The programmer's most often-used
          computer language (e.g., Assembly, JavaScript, Lisp, Python, Java,
          etc.) may be prefixed to the aforementioned terms. Some who work with
          web programming languages may also prefix their titles with web.
        </p>
      </div>
    </div>
  );
};

const Question = () => {
  return (
    <>
      <h3>
        {" "}
        Lets go for a <FaAddressBook />?{" "}
      </h3>
      <h3>
        {" "}
        Lets go for a <FaFacebook />?{" "}
      </h3>
    </>
  );
};
export default About;
