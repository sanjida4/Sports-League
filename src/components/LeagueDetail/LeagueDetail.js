import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import {FaTwitter, FaFacebook, FaYoutube} from 'react-icons/fa';
import './LeagueDetail.css';

const LeagueDetail = () => {
    const { idLeague } = useParams();
    const [league, setLeague] = useState({});

    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setLeague(data.leagues));
    }, [idLeague]);
    
    
    let gender;
    let imageURL = '';

    const gender2 = (gender=== "Male")? imageURL = "https://img.olympicchannel.com/images/image/private/t_social_share_thumb/primary/djnacbhtd6zvpkdiixah" :
    imageURL = "https://media.npr.org/assets/img/2019/01/02/gettyimages-1058306908-0b38ff8a90d7bf88fea3133d8b72498665f63e12.jpg";


    return (
        <div>
                {
                    league.length > 0 && (
                    <div>
                        <div className="hero-image">
                            <div className="overlay">
                                <img style={{background: 'none'}} src={league[0].strLogo} alt="" height= '200px'/>
                            </div>
                        </div>

                        <div className= 'body'>
                            <div className="details">
                                <div className="detailInfo">
                                    <h2>{league[0].strLeague}</h2>
                                    <p>Founded: {league[0].intFormedYear}</p>
                                    <p>Country: {league[0].strCountry}</p>
                                    <p>Sport Type: {league[0].strSport}</p>
                                    <p>Gender: {league[0].strGender}</p>
                                </div>
                                
                                <div>
                                    {gender = league[0].strGender}
                                    <img className="detail-image" src={imageURL} alt="" height="250px" width ='600px'/>
                                </div>
                            </div>
                        
                    
                <p style= {{marginTop: '30px'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id quidem cupiditate, voluptate blanditiis libero at illo sunt laborum quisquam suscipit iure mollitia modi provident in aut delectus. Vero explicabo id atque earum voluptate repellat aut consectetur error dolore cumque ducimus eveniet porro praesentium maiores quibusdam ipsum quasi rem, perferendis deleniti esse eum dolor iusto molestiae molestias. Mollitia quidem nobis placeat eligendi iste. Rerum ipsa, unde natus laborum a facilis architecto voluptates voluptatem blanditiis autem dolorum recusandae voluptatum nulla velit rem odio aspernatur sapiente quam iste ex molestiae voluptatibus cumque? Sunt delectus ipsa quos dolore illo accusamus quae vitae fugiat iste iusto dolorum maxime eos labore facere esse laboriosam, omnis odio, pariatur quo beatae, asperiores consectetur voluptatibus magnam! Sit magni hic consequatur eius at? At consectetur commodi dolores molestiae amet, atque suscipit labore dolor dignissimos recusandae ducimus ab. Explicabo, laudantium repellendus ut consequatur numquam minus adipisci in et? Eveniet, earum commodi! <br/> <br/> <br/> Eveniet, totam quae! Quis nihil accusamus assumenda adipisci temporibus mollitia voluptate illo laborum reprehenderit sunt perspiciatis labore necessitatibus ipsum magni provident ullam tempore reiciendis, quas nemo inventore deleniti quod? Mollitia impedit, officiis vel nobis illum blanditiis sint ab iusto veniam excepturi cupiditate incidunt esse magni quae. Sit distinctio quia aperiam! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum adipisci amet sunt ratione quis porro alias esse. Totam pariatur amet ea incidunt natus ad suscipit voluptates. Consectetur, aspernatur? Id quod, expedita quaerat deleniti rerum vel aliquam dolor facere accusantium quibusdam? Ducimus ex odit quos earum temporibus quis. Hic necessitatibus modi consequatur blanditiis esse quam similique commodi officiis molestiae magni dolorem expedita labore aperiam nihil, id, cum reprehenderit voluptas repudiandae error magnam, aliquid eos! Ipsam debitis laborum commodi iste voluptatibus reprehenderit culpa iure, natus sunt non? Omnis ducimus beatae dolorum non vitae nisi perferendis impedit voluptatibus, laborum sed harum iste fugiat repudiandae error iure a corporis aspernatur aut suscipit? Dignissimos quos labore illo sequi totam delectus ea laudantium corporis pariatur quod error doloremque autem laboriosam facere adipisci magni molestiae repellat minus exercitationem reprehenderit, ab voluptate excepturi maiores. Sint quidem molestiae recusandae voluptates dolorem cumque facere nesciunt dolore nam mollitia? Nulla nesciunt tenetur blanditiis totam? Quidem consequatur natus doloremque numquam labore officiis tenetur eum soluta consectetur, harum nam nemo facere, distinctio, similique iste architecto quos laboriosam ipsa cum amet voluptatibus repellat dignissimos quibusdam. Alias sequi consectetur eius provident, molestiae cumque magnam in doloremque similique earum nisi maxime. Porro qui consequuntur adipisci dolorum.</p>
                </div>
                </div>
                    )
                }
                
                
                <div id="icon">
                    <a style={{color: 'deepskyblue', marginLeft: '20px'}} href='https://twitter.com/premierleague'> <FaTwitter /></a>
                    <a style={{color: 'mediumblue', marginLeft: '20px'}} href="https://www.facebook.com/MLS"><FaFacebook /></a>
                    <a style={{color: 'red', marginLeft: '20px'}} href="https://www.youtube.com/channel/UCSZbXT5TLLW_i-5W8FZpFsg"><FaYoutube /></a>
                </div>
        </div>
    );
};

export default LeagueDetail;