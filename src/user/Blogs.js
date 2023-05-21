import React from 'react'
import './Home.css';

export const Blogs = () => {
    const customColor = 'rgb(10, 25, 47)';
    return (
        <div class="blogs" style={{ backgroundColor: customColor }}>
            <div class="container-xl text-white mt-5 pb-5" style={{ backgroundColor: customColor }} >
                <h2>My Blog:</h2>
                <p>
                    Web design encompasses many different skills and disciplines in the production and maintenance of websites.
                    The different areas of web design include web graphic design; user interface design (UI design); authoring,
                    including standardised code and proprietary software; user experience design (UX design); and search engine
                    optimization. Often many individuals will work in teams covering different aspects of the design process,
                    although some designers will cover them all. The term "web design" is normally used to describe the design
                    process relating to the front-end (client side) design of a website including writing markup. Web design
                    partially overlaps web engineering in the broader scope of web development. Web designers are expected to
                    have an awareness of usability and be up to date with web accessibility guidelines.
                </p>
                <h4>History:</h4>
                <p><strong>1988–2001: </strong>
                    Although web design has a fairly recent history, it can be linked to other areas such as graphic design,
                    user experience, and multimedia arts, but is more aptly seen from a technological standpoint. It has become
                    a large part of people's everyday lives. It is hard to imagine the Internet without animated graphics,
                    different styles of typography, background, videos and music. In November 1992, Cern was the first website
                    to ever launch to go live. The web was announced on August 6, 1991, and CERN was the first website to go
                    live on the world wide web. During this period, websites were structured by using the &lt;table&gt; tag
                    which created numbers on the website. Eventually, web designers were able to find their way around it to
                    create more structures and format. In early history, the structure of the websites was fragile and hard to
                    contain, so it became very difficult to use them. In November 1993 ALIWEB was the first ever search engine
                    to be created (Archie Like Indexing for the WEB).</p>

                <p><strong>The start of the web and web design:</strong><br />

                    In 1989, whilst working at CERN, Tim Berners-Lee proposed to create a global hypertext project, which later
                    became known as the World Wide Web. From 1991 to 1993 the World Wide Web was born. Text-only HTML pages
                    could be viewed using a simple line-mode web browser.[3] In 1993 Marc Andreessen and Eric Bina, created the
                    Mosaic browser. At the time there were multiple browsers, however the majority of them were Unix-based and
                    naturally text-heavy. There had been no integrated approach to graphic design elements such as images or
                    sounds. The Mosaic browser broke this mold.[4] The W3C was created in October 1994 to "lead the World Wide
                    Web to its full potential by developing common protocols that promote its evolution and ensure its
                    interoperability." This discouraged any one company from monopolizing a propriety browser and programming
                    language, which could have altered the effect of the World Wide Web as a whole. The W3C continues to set
                    standards, which can today be seen with JavaScript and other languages. In 1994 Andreessen formed Mosaic
                    Communications Corp. that later became known as Netscape Communications, the Netscape 0.9 browser. Netscape
                    created its own HTML tags without regard to the traditional standards process. For example, Netscape 1.1
                    included tags for changing background colours and formatting text with tables on web pages. From 1996 to
                    1999 the browser wars began, as Microsoft and Netscape fought for ultimate browser dominance. During this
                    time there were many new technologies in the field, notably Cascading Style Sheets, JavaScript, and Dynamic
                    HTML. On the whole, the browser competition did lead to many positive creations and helped web design evolve
                    at a rapid pace.
                </p>
                <p>
                    <strong>Evolution of web design:</strong> <br />
                    In 1996, Microsoft released its first competitive browser, which was complete with its own features and HTML
                    tags. It was also the first browser to support style sheets, which at the time was seen as an obscure
                    authoring technique and is today an important aspect of web design.The HTML markup for tables was
                    originally intended for displaying tabular data. However, designers quickly realized the potential of using
                    HTML tables for creating complex, multi-column layouts that were otherwise not possible. At this time, as
                    design and good aesthetics seemed to take precedence over good markup structure, little attention was paid
                    to semantics and web accessibility. HTML sites were limited in their design options, even more so with
                    earlier versions of HTML. To create complex designs, many web designers had to use complicated table
                    structures or even use blank spacer .GIF images to stop empty table cells from collapsing. CSS was
                    introduced in December 1996 by the W3C to support presentation and layout. This allowed HTML code to be
                    semantic rather than both semantic and presentational and improved web accessibility, see tableless web
                    design.

                    In 1996, Flash (originally known as FutureSplash) was developed. At the time, the Flash content development
                    tool was relatively simple compared to now, using basic layout and drawing tools, a limited precursor to
                    ActionScript, and a timeline, but it enabled web designers to go beyond the point of HTML, animated GIFs and
                    JavaScript. However, because Flash required a plug-in, many web developers avoided using it for fear of
                    limiting their market share due to lack of compatibility. Instead, designers reverted to gif animations (if
                    they didn't forego using motion graphics altogether) and JavaScript for widgets. But the benefits of Flash
                    made it popular enough among specific target markets to eventually work its way to the vast majority of
                    browsers, and powerful enough to be used to develop entire sites.
                </p>
                <p> <strong>End of the first browser wars Further information:</strong> <br />
                    Browser wars § First Browser War (1995–2001)
                    In 1998, Netscape released Netscape Communicator code under an open-source licence, enabling thousands of
                    developers to participate in improving the software. However, these developers decided to start a standard
                    for the web from scratch, which guided the development of the open-source browser and soon expanded to a
                    complete application platform. The Web Standards Project was formed and promoted browser compliance with
                    HTML and CSS standards. Programs like Acid1, Acid2, and Acid3 were created in order to test browsers for
                    compliance with web standards. In 2000, Internet Explorer was released for Mac, which was the first browser
                    that fully supported HTML 4.01 and CSS 1. It was also the first browser to fully support the PNG image
                    format. By 2001, after a campaign by Microsoft to popularize Internet Explorer, Internet Explorer had
                    reached 96% of web browser usage share, which signified the end of the first browsers wars as Internet
                    Explorer had no real competition.
                </p>
                <p>
                    <strong>2001–2012:</strong>
                    Since the start of the 21st century, the web has become more and more integrated into people's lives. As
                    this has happened the technology of the web has also moved on. There have also been significant changes in
                    the way people use and access the web, and this has changed how sites are designed.

                    Since the end of the browsers wars[when?] new browsers have been released. Many of these are open source
                    meaning that they tend to have faster development and are more supportive of new standards. The new options
                    are considered by many[weasel words] to be better than Microsoft's Internet Explorer.

                    The W3C has released new standards for HTML (HTML5) and CSS (CSS3), as well as new JavaScript API's, each as
                    a new but individual standard.[when?] While the term HTML5 is only used to refer to the new version of HTML
                    and some of the JavaScript APIs, it has become common to use it to refer to the entire suite of new
                    standards (HTML5, CSS3 and JavaScript).
                </p>
                <p>
                    <strong>2012 and later:</strong>
                    With the improvement of 3G and LTE internet coverage, a large part of website traffic became
                    mobile-generated. This affected the web design industry, pushing it towards a minimalistic, lightened and
                    simplistic style. In particular, the "Mobile first" approach emerged, which implies creating website design
                    with a mobile-oriented layout first, and then adapting it to higher screen dimensions.
                    <br /><br />
                    <strong>Tools and technologies</strong> <br />
                    Web designers use a variety of different tools depending on what part of the production process they are
                    involved in. These tools are updated over time by newer standards and software but the principles behind
                    them remain the same. Web designers use both vector and raster graphics editors to create web-formatted
                    imagery or design prototypes. A website can be created using WYSIWYG website builder software or content
                    management system, or the individual web pages can be hand-coded in just the same manner as the first web
                    pages were created. Other tools web designers might use include markup validators and other testing tools
                    for usability and accessibility to ensure their websites meet web accessibility guidelines.
                    <br /><br />
                    <strong>UX Design </strong> <br />

                    One popular tool in web design is UX Design is a type of art that designs products to perform an accurate
                    user background. UX design is very deep. UX is more than the web it is very independent, and its
                    fundamentals can be applied to many other browsers or apps. Web design is mostly based on web-based things.
                    UX can overlap both web design and design. UX design mostly focuses on products that are less web based.
                    <br /><br />
                    <strong>Skills and techniques</strong> <br />

                    Marketing and communication design
                    Marketing and communication design on a website may identify what works for its target market. This can be
                    an age group or particular strand of culture; thus the designer may understand the trends of its audience.
                    Designers may also understand the type of website they are designing, meaning, for example, that (B2B)
                    business-to-business website design considerations might differ greatly from a consumer-targeted website
                    such as a retail or entertainment website. Careful consideration might be made to ensure that the aesthetics
                    or overall design of a site do not clash with the clarity and accuracy of the content or the ease of web
                    navigation,especially on a B2B website. Designers may also consider the reputation of the owner or
                    business the site is representing to make sure they are portrayed favorably. Web designers normally oversee
                    all the websites that are made on how they work or operate on things. They constantly are updating and
                    changing everything on websites behind the scenes. All the elements they do are text, photos, graphics, and
                    layout of the web. Before beginning work on a website, web designers normally set an appointment with their
                    clients to discuss layout, color, graphics, and design. Web designers spend the majority of their time
                    designing websites and making sure the speed is right. Web designers typically engage in testing and
                    working, marketing, and communicating with other designers about laying out the websites and finding the
                    right elements for the websites.
                    <br /><br />
                    <strong>User experience design and interactive design</strong> <br />

                    User understanding of the content of a website often depends on user understanding of how the website works.
                    This is part of the user experience design. User experience is related to layout, clear instructions, and
                    labeling on a website. How well a user understands how they can interact on a site may also depend on the
                    interactive design of the site. If a user perceives the usefulness of the website, they are more likely to
                    continue using it. Users who are skilled and well versed in website use may find a more distinctive, yet
                    less intuitive or less user-friendly website interface useful nonetheless. However, users with less
                    experience are less likely to see the advantages or usefulness of a less intuitive website interface. This
                    drives the trend for a more universal user experience and ease of access to accommodate as many users as
                    possible regardless of user skill. Much of the user experience design and interactive design are
                    considered in the user interface design.

                    Advanced interactive functions may require plug-ins if not advanced coding language skills. Choosing whether
                    or not to use interactivity that requires plug-ins is a critical decision in user experience design. If the
                    plug-in doesn't come pre-installed with most browsers, there's a risk that the user will have neither the
                    know-how nor the patience to install a plug-in just to access the content. If the function requires advanced
                    coding language skills, it may be too costly in either time or money to code compared to the amount of
                    enhancement the function will add to the user experience. There's also a risk that advanced interactivity
                    may be incompatible with older browsers or hardware configurations. Publishing a function that doesn't work
                    reliably is potentially worse for the user experience than making no attempt. It depends on the target
                    audience if it's likely to be needed or worth any risks.
                </p>
            </div>

        </div>
    )
}
export default Blogs;