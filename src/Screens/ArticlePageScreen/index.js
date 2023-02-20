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
                    Navigating and Thriving in the Neighborhood Homeschool Ecosystem Through
                    Homeschool Communities
                </p>

            </div>


        {/*    article dates section*/}

            <div className='articleDatesSectionWrapper'>
                <div className='articleDateWrapper'>
                    <p>
                        Anonymous
                    </p>
                    <p className='dateparaStyle'>
                        Feburary 20, 2023
                    </p>

                </div>
                <div className='articleTimeWrapper'>
                    <p>
                        Reading Time: 7 minutes
                    </p>

                </div>


            </div>





            <div className='articleImageSectionMain'>
                <div className='articleImageWrapper'>
                    <img src={require('../../Assets/Images/articleImage.png')} alt=""/>
                    {/*<div className='articleImageButtonWrapper'>*/}
                    {/*    Rent Out a Resource*/}
                    {/*</div>*/}

                </div>

                <p>
                    Homeschool Communities is a website for the Neighborhood Homeschool Ecosystem which enables families to identify, access, and use myriad resources.
                    <br /><br/>
                    <ul className='list_points_article'>
                        <li>
                            It is a platform similar to Airbnb and Upwork to solicit space in homes within a specific geographic area (the neighborhood home school boundaries) in which classes in specific subject matter areas can be held.
                        </li>
                        <li>
                            It is all about helping homeschoolers find and schedule appropriate curricular materials and homeschooling associations,
                        </li>
                        <li>
                            It is a place where skilled parents and education providers (subject matter tutors and teachers) can make their availability known and schedule their services.
                        </li>
                        <li>
                            It is about finding architects and home builders who understand “learning space” and residential developers who see the potential in creating whole neighborhoods around the idea of homeschooling. They know how to work with and change or implement zoning and other design and building requirements relevant to children and schooling.
                        </li>
                        <li>
                            It is about being a resource to connect home [school] buyers and renters with realtors or agents,
                        </li>
                    </ul>






                </p>

            </div>



        {/*    article para sections*/}

            <div className='articleParaSectionStart'>
                <div className='articleParaOwnSection'>
                    <h3>
                        Background
                    </h3>
                    <p>
                        Homeschooling is becoming increasingly popular, however, parents have discovered that home schooling has its own set of problems, such as
                        <br/><br/>
                        <ul className='list_points_article'>
                            <li>
                                Finding co-ops for group learning and socialization
                            </li>
                            <li>
                                Finding Curricular or teaching material and knowing what to teach at each grade level and when and how.
                            </li>
                            <li>
                                Finding Money and Resources, or having and paying for everything that is covered by taxes in public schools
                            </li>
                            <li>
                                Finding skilled parents willing to share their talents in a group setting, because curiously, “homeschooling” is often about parents controlling the education of their children rather than parents actually teaching them academic subject matter. Indeed, parents do not always feel qualified by knowledge, skill, or temperament to teach their own kids, especially after about the 5th grade level, nor are they always available, because of work or other commitments, to teach. So it is also about finding teachers willing to assist the group
                            </li>
                        </ul>
                    </p>
                </div>

                <div className='articleParaOwnSection'>
                    <h3>
                        Plans for future recognition as a legitimate schooling option to homeschoolers in middle and high school
                    </h3>
                    <p>
                        Aleah, a 14-year-old who had previously been homeschooled, is pleasantly relieved when her art teacher gives her an A in his class. Her artwork takes center stage and the teacher tells her she is definitely his top student this year. Knowing that he has taught hundreds of students throughout the years, and an accomplished artist himself, she understands this is a high compliment coming from him. When she tells her mother how she has benefited from her experiences in her art class, she is happy for her as art is a subject she could never seem to get around to teaching when she was homeschooling her.
                    </p>
                    <p>
                        Having a healthy relationship with another adult who served as a role model and mentor was a social benefit to Aleah. For years the homeschool movement has been criticized for the lack of opportunity to socialize. Homeschooled children, in the opinion of its skeptics, are isolated and require more interaction with peers their same age, as well as other teachers.

                    </p>
                    <p>
                        To address the perceived issues of homeschooling, a variety of “hybrid” homeschooling models have emerged in recent years which strip away the more pernicious features of public, private, parochial, chartered, and even homeschooling while retaining what is best in all of them.
                    </p>
                    <p>
                        There is a long educational history or tradition of parents sending their kids to local, neighborhood teachers for specific subject matter instruction, particularly in piano and voice or other music lessons, and students served apprenticeships with local masters to learn crafts and trades. Before the advent of public education, boys and girls were often sent to neighborhood homeschools to learn their ABC’s, and that tradition is currently undergoing a dramatic revival.
                    </p>
                    <p>
                        Similarly, Homeschool Co-ops (a group of families who meet together and work cooperatively) have emerged in the past few decades as well. Co-ops can be organized around academics, social time, the arts, and projects or a combination of these. Medium (from five to about twenty families) to large (more than ten families) co-ops are advantageous as there are more families to carry the load. However, their greatest challenge is in finding a meeting space. Most groups turn to free space in a library, church, or community center.
                    </p>
                    <p>
                        The Homeschool Communities platform is being developed to help parents of homeschool groups, or co-ops navigate and thrive in the neighborhood homeschool ecosystem and economy, and help you understand and resolve problems and concerns, as older children and teenagers often start agitating for socialization and educational experiences that are characteristic of public middle schools and high schools.
                    </p>
                </div>



                <div className='articleParaOwnSection'>
                    <h3>
                        Virtual neighborhood home school boundaries will enable homeschool groups to gather effortlessly around the world
                    </h3>
                    <p>
                        When the Church was organized in April 1830, there was no need for an extensive organizational structure, as most Saints could meet together in the same place. As individuals and families joined the Church in more distant locations, they were organized as separate congregations, or “branches.” Then, within a year of the Church’s founding, gathering centers were soon established. The Homeschool Community project will adopt a similar structure, highlighting the Church's modern framework as a model for the “gathering centers.”
                    </p>
                    <p>
                        As the homeschooling movement evolves, the organizational structure will stay much the same but changes are already being anticipated to divide large neighborhoods based on the number of users registering rather than their distance from one another. These adjustments will lead to co-ops of a more manageable size and encourage greater participation among local members.
                    </p>
                    <p>
                        When a new user registers on the homeschool community website, a membership record gets created and members are assigned to their neighborhood homeschool group. Members are also welcome to leave the group and manually create their own groups, inviting who they want to join.

                    </p>

                </div>


                <div className='articleParaOwnSection'>
                    <h3>
                        Homeschool co-ops to do school in safely gated residential communities
                    </h3>
                    <p>
                        Along with establishing homeschool co-op groups in neighborhoods, plans to design and architect homeschool-friendly neighborhoods are being made so that you can meet with your group for school once or twice a week in a safely gated residential community during school hours nearby. Parents have a fiduciary duty the group to ensure that at least two parents are in each room at all times to protect their children from any type of child abuse. This means parents won’t be dropping their children off at someone’s house anymore or a building somewhere. They will be with their children onsite.
                    </p>
                    <p>
                        The vision of Homeschool Communities is to stay free of any obligation to the state and simply make way for homeschool-friendly neighborhoods for co-op groups to do school in. Our mission is to commit parents (if they can) to teaching their own children instead of dropping them off to be taught by someone else. Homeschool groups can also hire teachers as volunteers or hire paid teachers as employees. They can find class electives and as a school join the class. There are a number of categories offered on the site and each category works in the same way. Categories include field trips, apprenticeships, clubs, and Individualized Education Programs, or IEPS.
                    </p>

                </div>


                <div className='articleParaOwnSection'>
                    <h3>
                        Building homes and residential communities for Homeschoolers:  an untapped market for builders and developers
                    </h3>
                    <p>
                        Although homeschooling was long regarded as a fringe movement with dubious educational benefits, it is now seen by many families as an increasingly viable alternative.
                    </p>
                    <p>
                        The primary driver behind this change in attitudes was the Covid pandemic, which closed public schools and forced parents to make their home the classroom. Of course, for some families this was a complete disaster, but for millions of others solutions were found for the problems they encountered. Consequently, right now, there is a vast number of families ready to buy or build homes that include dedicated learning spaces, and they are ready to locate in communities, neighborhoods, and housing developments that accommodate the needs and concerns of homeschooling.
                    </p>
                    <p>
                        Homeschoolers are typically affluent and prepared to spend money on the education of their children. And there are home builders and residential community developers who are prepared to tap this emerging market and make money by identifying the specific spatial needs of homeschooling clients and designing appropriate architectural solutions. In addition, these homes, dedicated to homeschooling, need not be isolated, for home schooling is increasingly becoming a residential neighborhood or community effort, in which the majority of families in a specific geographic area participate in a coordinated homeschooling effort, and learning spaces (classrooms and resources) are located in numerous homes in close proximity.
                    </p>
                    <p>
                        Homeschool Communities serves the Neighborhood Homeschool ecosystem which enables families to identify and access myriad resources in larger group settings with friends and neighbors. It is all about helping homeschoolers find not just appropriate curricular materials, homeschool neighbors, and providers, but also to find architects and home builders who understand “learning space.” It is about finding residential developers who see the potential in creating whole neighborhoods around the idea of home schooling and understand how to work with zoning and other design and building requirements relevant to children and schooling. It is about being a resource to connect home [school] buyers and renters with realtors or agents, and it is a place where providers (subject matter tutors and teachers) can make their availability known.

                    </p>

                </div>


                <div className='articleParaOwnSection'>
                    <h3>
                        Homeowners have an opportunity to create an extra revenue stream through home sharing
                    </h3>
                    <p>
                        Investors and/or second home buyers need to be willing to dedicate their entire home as a subject matter resource (much like Airbnb vacation resort communities are solely dedicated to travelers). This will provide homeowners with an opportunity to create an extra revenue stream through home sharing, who may be passionate about the subject matter that their house is designed to cover, and/or who share our enthusiasm for supporting parents of homeschooled children. Each home will be staged by subject matter either by an interior decorator before the home is sold, or by the homeowner before it is listed on the Homeschool Communities website. In many cases, the homebuyer will commit their home to the subject matter intended before purchasing the home.
                    </p>

                </div>


                <div className='articleParaOwnSection'>
                    <h3>
                        Finding classroom space in homes and teaching staff for neighborhood homeschools
                    </h3>
                    <p>
                        It was famously said of Johns Hopkins, that “Johns Hopkins on one end of a log in the woods, with a student at the other end, is a university.” The statement calls attention to the fact that the most important consideration in education is the relationship between teacher and student. Nevertheless, there is that log in the forest, the context or space where that learning takes
                        place, and in the neighborhood homeschool ecosystem, the learning space or classroom is in the home, rather than the institutional and often prison-like look and feel of public, private, and parochial schools. In the homes of homeschoolers, there is typically some designated space  that serves a characteristic purpose, such as a kitchen, dining room or living room, that is
                        repurposed or transformed in minutes or seconds into a classroom.
                    </p>
                    <p>
                        This is the ideal, and for most it functions very well. However, neighborhood homeschoolers recognize that certain subjects, grade levels, or learning experiences, or family circumstances may require the use of learning space in someone else’s home, just as the learning space and experience in your home may be the most appropriate place for the children of other families in
                        the neighborhood.

                    </p>
                    <p>
                        The Homeschool Communities platform can help you find and schedule classes in the homes of other people, as well as connect other families with the unique learning experiences you may offer in your own home. Is there an open, well-lighted, and inviting space in your house that can
                        function as a classroom, one or more times a week, for several to a dozen local students learning in a neighborhood homeschool environment?

                    </p>
                    <p>
                        Moreover, the classes offered in your neighbor’s home may be taught by that homeowner, knowledgeable in subject matter and enthusiastic as a teacher, just as you can schedule and teach kids from other families in your home through homeschool communities. Homeschoolers discovered long ago that a college degree and certification as a teacher don’t necessarily make a person a good teacher, and those qualities, absolutely necessary in public education, are not essential in the homeschooling classroom.

                    </p>

                </div>


                <div className='articleParaOwnSection'>
                    <h3>
                        Resource solutions through Homeschool Communities
                    </h3>
                    <p>
                        Learning resources, such as text and reference books, teaching supplies, instruments, computer and electronic equipment and more, are a major expense in any educational context and frightful to the homeschooler still paying taxes to support the public school system but not having access to public school resources and paying for what is needed herself. More and more of those resources are, thankfully, available online at little or no cost, but the learning resources available in the neighborhood homeschool community are often overlooked and typically underutilized. Now, homeschoolers can create their own learning libraries and resources for their group and share them, through the resource feature of the Homeschool Community platform, with other homeschoolers in the neighborhood.
                    </p>

                </div>


                <div className='articleParaOwnSection'>
                    <h3>
                        Curriculum Solutions through Homeschool Communities
                    </h3>
                    <p>
                        In the late 60’s, a Simon and Garfunkel song said, “When I think about all the crap I learned in high school, it’s a wonder that I learned to think at all,” and at the core of the great jailbreak of homeschoolers from the public school system has been a sense that the curriculum is out of wack, feeding students a lot of stuff they don’t need or want, and seriously neglecting or starving them of more essential knowledge. Homeschooling parents are adamant about what they don’t want, but don’t always know where and how to find and implement appropriate and satisfactory curricular materials.
                    </p>
                    <p>
                        Commercial curriculum packages will never be as good as the lessons you'll find from communities contributing to them in a regulated manner. Parents need variety so they can tailor lessons based on their children's needs. They need to be able to create their own curriculums.
                    </p>

                    <p>
                        Homeschool Communities provides a default curriculum, in the style of “Come, Follow Me,” which is based on core subjects for college entrance. Subject matter lessons, mostly developed by experts in the neighborhood homeschool community, are provided for each day/week of the school year calendar. Users/parents, however, can adapt, edit, tailor, and curate this lesson material to suit the needs of their children. Lessons can be submitted to Homeschool Communities for review to contribute to the default curriculum and credit is given to its authors.
                    </p>
                    <p>
                        A Rating and Review system throughout the Homeschool Communities platform will help guide homeschoolers to make better choices <i> for them </i> in the lessons, classes, and extracurricular activities they choose to associate with.
                    </p>
                    <p>
                        In conclusion, it is all about helping families and their issues with socialization and giving them the resources to thrive all the way to graduation.
                    </p>
                </div>


            </div>

        </section>
    )
}
export default ArticlePageScreen
