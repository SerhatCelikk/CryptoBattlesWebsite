import React from "react";
import styles from './home2.module.css';

const Home2 = () => {
    return (
        <div>
            <div class="relative bg-amber-300">
                <div class={styles.area4} >
                    <div className={styles.teamList}>
                      <ul class={styles.ulTeam} >
                            <li className={styles.li}>
                                <div>
                                    <h3 className={styles.h3}>TEAM</h3>
                                    <p className={styles.p}>StreetMachine is the effort of a global, cross cultural team of both eastern and western builders.</p>
                                </div>
                            </li>
                            <li class={"w-[33.3% p-[30px] relative flex flex-wrap content-center justify-center  "+styles.display}>
                              <img src="https://streetmachine.oss-us-west-1.aliyuncs.com/images/team/01.png" alt="" id="index_team_01"/>
                            </li>
                            <li class={"w-[33.3% p-[30px] relative flex flex-wrap content-center justify-center  "+styles.display}>
                              <img src="https://streetmachine.oss-us-west-1.aliyuncs.com/images/team/02.png" alt="" id="index_team_02"/>
                            </li>
                            <li class={"w-[33.3% p-[30px] relative flex flex-wrap content-center justify-center  "+styles.display}>
                              <img src="https://streetmachine.oss-us-west-1.aliyuncs.com/images/team/03.png" alt="" id="index_team_03"/>
                            </li>
                            <li class={"w-[33.3% p-[30px] relative flex flex-wrap content-center justify-center  "+styles.display}>
                              <img src="https://streetmachine.oss-us-west-1.aliyuncs.com/images/team/04.png" alt="" id="index_team_04"/>
                            </li>
                            <li class={"w-[33.3% p-[30px] relative flex flex-wrap content-center justify-center  "+styles.display}>
                              <img src="https://streetmachine.oss-us-west-1.aliyuncs.com/images/team/05.png" alt="" id="index_team_05"/>
                            </li>
                            <li class={"w-[33.3% p-[30px] relative flex flex-wrap content-center justify-center "+styles.display}>
                              <img src="https://streetmachine.oss-us-west-1.aliyuncs.com/images/team/06.png" alt="" id="index_team_06"/>
                            </li>
                            <li class={"w-[33.3% p-[30px] relative flex flex-wrap content-center justify-center "+styles.display}>
                              <img src="https://streetmachine.oss-us-west-1.aliyuncs.com/images/team/07.png" alt="" id="index_team_07"/>
                            </li>
                            <li class={"w-[33.3% p-[30px] relative flex flex-wrap content-center justify-center "+styles.display}>
                              <img src="https://streetmachine.oss-us-west-1.aliyuncs.com/images/team/08.png" alt="" id="index_team_08"/>
                            </li>
                            <li class={"w-[33.3% p-[30px] relative flex flex-wrap content-center justify-center "+styles.display}>
                              <img src="https://streetmachine.oss-us-west-1.aliyuncs.com/images/team/09.png" alt="" id="index_team_09"/>
                            </li>
                            <li class={"w-[33.3% p-[30px] relative flex flex-wrap content-center justify-center "+styles.display}>
                              <img src="https://streetmachine.oss-us-west-1.aliyuncs.com/images/team/10.png" alt="" id="index_team_10"/>
                            </li>
                            <li class={"w-[33.3% p-[30px] relative flex flex-wrap content-center justify-center "+styles.display}>
                              <img src="https://streetmachine.oss-us-west-1.aliyuncs.com/images/team/11.png" alt="" id="index_team_11"/>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home2;