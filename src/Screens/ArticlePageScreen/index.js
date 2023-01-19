import React from 'react'
import './style.scss'
import {BsArrowLeft } from 'react-icons/bs'
import {Link} from "react-router-dom";
const ArticlePageScreen = () => {
    return(
        <section className='articleScreenSection'>

            <Link to={'/'} className='linkBackStyle'>
                <div className='backWrapper'>
                    <BsArrowLeft className={'backIcon'} size={22} color={'#455467'} />
                    <p>
                        Go back
                    </p>

                </div>
            </Link>



        {/*    Article Heading Sections*/}

            <div className='articleHeadingMainWrapper'>
                <h4>
                    BUILDING HOMESCHOOL COMMUNITIES / RESEARCH HIGHLIGHT
                </h4>

                <h3>
                    The Homeschool Community Project
                </h3>

                <p>
                    Utah’s Young Families to Usher in a New Way Forward in Education
                </p>

            </div>


        {/*    article dates section*/}

            <div className='articleDatesSectionWrapper'>
                <div className='articleDateWrapper'>
                    <p>
                        Lisa R English
                    </p>
                    <p className='dateparaStyle'>
                        December 5, 2022
                    </p>

                </div>
                <div className='articleTimeWrapper'>
                    <p>
                        Reading Time: 7 minutes
                    </p>

                </div>


            </div>



        {/*    article Image section*/}

            <div className='articleImageSectionMain'>
                <div className='articleImageWrapper'>
                    <img src={require('../../Assets/Images/articleImage.png')} alt=""/>
                    {/*<div className='articleImageButtonWrapper'>*/}
                    {/*    Rent Out a Resource*/}
                    {/*</div>*/}

                </div>

                <p>
                    The question I get asked the most is, "Do I have to sell my home and move into a homeschool community so that I can finally feel confident homeschooling?"
                    <br />
                    <br />
                    The initial concept model would be ideal if it were established in a community that supports homeschooling and complies with zoning regulations. The good news is that a homeschool community would benefit the neighborhoods within the boundary established. However, in reality, a homeschooler does not have to live in a community that encourages homeschooling. They would have the ability to develop their own resources within their current neighborhood.
                </p>

            </div>



        {/*    article para sections*/}

            <div className='articleParaSectionStart'>
                <div className='articleParaOwnSection'>
                    <h2>
                        A HYBRID APPROACH
                    </h2>
                    <p>
                        More families should feel empowered to continue homeschooling through high school as a result of the growth of homeschool communities. Parents torn to enroll their children in a public, private, or charter school, would be able to acquire and use school resources on their own terms thanks to an intermediary platform called Willoby (formerly Homeschool Neighbor). Homeowners would be permitted to rent out their residences to homeschooling groups in a manner similar to Airbnb bookings, open classes, and using school amenities in the clubhouse.

                        In addition to a clubhouse with an auditorium, a library, and a science lab, there would also be teacher patrons on-site to assist families. Other features may include playgrounds, baseball and soccer fields, and benches where various groups may gather or relax while reading a book beneath a tree.
                    </p>
                </div>

                <div className='articleParaOwnSection'>
                    <h2>
                        THE PAY-OFF
                    </h2>
                    <p>
                        Currently, a typical homeschool group that is too large to meet in a single home will meet at a church or public building and share the expense with the other members of the group if they engage a hired instructor. As a result of multiple groups contributing financially in a homeschool community, families can benefit from chances like hiring teachers at a lower cost.
                    </p>
                </div>

                <div className='articleParaOwnSection'>
                    <h2>
                        No More Bureaucracy
                    </h2>
                    <p>
                        That’s sending a powerful message to families that there are now options available rather than being compelled to enroll their children in the public school system, which many people believe to be overrun with politics. If we can open these channels, future students may have access to catalogs of specialized courses than they would with just one high school catalog. <br /> <br />

                        Classes are one advantage. Additionally, there will be several extracurricular areas from which families can select. In essence, on-demand options would enable parents to build customized curriculum for their students. Field trip packages, educational opportunities, sports leagues, apprenticeships, and parent workshops are examples of this. By spending the majority of the week with their parents at home and the remaining time participating in social activities, exactly like they would in a public high school, students will be able to build more enduring and meaningful relationships.
                        <br /> <br />
                        The challenge is not whether a home builder can build and sell homes in a homeschool community. Thanks to online marketplaces like Airbnb and Uber, that tested model is already in use in the vacation resort industry. Communities for homeschoolers could also become increasingly common. The challenge is there could be a finite number of situations. For example, how many parents will actually be willing to teach a class elective out of their home? Imagining that there will be a variety of esoteric options from which to choose does not mean they would actually be available.
                        <br /> <br />
                        This is what is so tricky. The world seems limitless, but these physical things can actually be fairly limited. People might say they want to discover new classes, but in practice, will families stick with a small selection of popular subjects? Only time will tell. We're undoubtedly going into this with our eyes wide open and just seeing how it goes.
                        <br /> <br />
                        For those who wish politics would stay out of our schools, something like this might be appealing just for the very fact that these communities are regular homes purchased by homeowners and far from the state schools where taxpayers are being gouged to build and repair more of them no one will ever actually own.
                         </p>
                </div>

                <div className='articleParaOwnSection'>
                    <h2>
                        About the Author
                    </h2>
                    <p>
                        Lisa English is the organization's creator.
                    </p>
                </div>


            </div>

        </section>
    )
}
export default ArticlePageScreen
