<template>
    <div id = "entire-content">   
        <div id = "buttons">  <!-- Div Block for the side navigation buttons -->
        <HomeButton id="homebut"/>
        <div style="font-size:1.5rem;padding:5%;border-top: ridge; margin-top:5%"></div>
            <p>Currently Viewing : </p> 
            <div class="action_btn"> <!-- Currently viewing button (in red) -->
                <button id='current_btn'>{{this.choice2}}</button>
            </div>
            <div class="arrow" v-show='level_4_parameter.length != 0 || level_3_parameter.length != 0 || level_2_parameter.length != 0 || level_1_parameter.length != 0'>
                <i class="bi bi-arrow-up"></i>
            </div>

            <p v-show='level_4_parameter.length != 0 || level_3_parameter.length != 0 || level_2_parameter.length != 0 || level_1_parameter.length != 0'>Other Relevant Results : </p>
            <div class="action_btn" v-show='level_4_parameter.length != 0'> <!-- Level 4 search parameters -->
                <button v-for='param in level_4_parameter' :key='param.Name' @click="storeSpecParam(param.Name)">{{param.Name}}</button>
            </div>

            <div class="arrow" v-show='level_4_parameter.length != 0 && (level_3_parameter.length != 0 || level_2_parameter.length != 0 || level_1_parameter.length != 0)'>
                <i class="bi bi-arrow-up"></i> 
            </div>
            <div class="action_btn" v-show='level_3_parameter.length != 0'> <!--Level 3 search parameters  -->
                <button v-for='param in level_3_parameter' :key='param.Name' @click="storeSpecParam(param.Name)">{{param.Name}}</button>
            </div>

            <div class="arrow" v-show='level_3_parameter.length != 0 && (level_2_parameter.length != 0 || level_1_parameter.length != 0)'>
                <i class="bi bi-arrow-up"></i>
            </div>
            <div class="action_btn" v-show='level_2_parameter.length != 0'> <!-- Level 2 search parameters -->
                <button v-for='param in level_2_parameter' :key='param.Name' @click="storeSpecParam(param.Name)">{{param.Name}}</button>
            </div>

            <div class="arrow" v-show='level_2_parameter.length != 0 && level_1_parameter.length != 0'>
                <i class="bi bi-arrow-up"></i>
            </div>
            <div class="action_btn" v-show='level_1_parameter.length != 0'> <!-- Level 1 search parameters -->
                <button v-for='param in level_1_parameter' :key='param.Name' @click="storeSpecParam(param.Name)">{{param.Name}}</button>
            </div>
            <button id="back" type="button" class="btn btn-outline-secondary" @click="goBack()">
                <i class="bi bi-arrow-left" style="font-size: 15px;"> Previous </i>
            </button>
        </div>
        <div id = "specific-results">
            <div class="expand"> <!-- Expand and collapse all button -->
              <span @click=levelCollapse() style="cursor:pointer;">
                <span v-if="!levelDisplay"><u>Expand All</u> &nbsp;<i class="bi bi-caret-down-fill"></i></span>
                <span v-if="levelDisplay"><u>Collapse All</u> &nbsp;&nbsp;<i class="bi bi-caret-up-fill"></i></span>
              </span>
            </div>
            <ul>
                <li v-for="cdc in final_array" :key="cdc.chapterID"> <!-- each document from Firebase's chosen search parameter displayed here -->
                    <Collapsible :title="cdc.Content" :chapt="cdc.Number" :levelDisplay="levelDisplay">
                        <p v-html="cdc.Text"></p> <!-- Text field shown here -->
                        <div class = 'formula' v-show="cdc.Formula"> <!-- Conditional block: only if formula exists -->
                            <img :src="cdc.Formula" @click="show(7)"> <!-- Display image of formula -->
                            <vue-easy-lightbox
                            :visible="visible7"
                            :imgs="cdc.Formula"
                            @hide="handleHide(7)"
                            ></vue-easy-lightbox> <!-- Display zoomed image of formula -->
                        </div>

                        <div class='table' v-show="cdc.Table"> <!-- Conditional block: only if table exists -->
                            <img :src="cdc.Table" @click="show(8)"> <!-- Display image of table -->
                            <vue-easy-lightbox
                            :visible="visible8"
                            :imgs="cdc.Table"
                            @hide="handleHide(8)"
                            ></vue-easy-lightbox> <!-- Display zoomed image of Table -->
                        </div>

                        <p v-html="cdc.Notes" v-show="cdc.Notes"></p> <!-- Notes field shown here -->

                        <div class = 'figure' v-show="cdc.Figure1"> <!-- Conditional block: only if figure1 exists -->
                            <img :src="cdc.Figure1" @click="show(1)"> <!-- Display image of figure1 -->
                            <vue-easy-lightbox
                            :visible="visible1"
                            :imgs="cdc.Figure1"
                            @hide="handleHide(1)"
                            ></vue-easy-lightbox> <!-- Display zoomed image of figure1 -->
                        </div>
                        <br v-show="cdc.Notes2">
                        <p v-html="cdc.Notes2" v-show="cdc.Notes2"></p> <!-- Notes field shown here -->

                        <div class = 'figure' v-show="cdc.Figure2"> <!-- Conditional block: only if figure2 exists -->
                            <img :src="cdc.Figure2" @click="show(2)"> <!-- Display image of figure2 -->
                            <vue-easy-lightbox
                            :visible="visible2"
                            :imgs="cdc.Figure2"
                            @hide="handleHide(2)"
                            ></vue-easy-lightbox> <!-- Display zoomed image of figure2 -->
                        </div>

                        <div class = 'figure' v-show="cdc.Figure3"> <!-- Conditional block: only if figure3 exists -->
                            <img :src="cdc.Figure3" @click="show(3)"> <!-- Display image of figure3 -->
                            <vue-easy-lightbox
                            :visible="visible3"
                            :imgs="cdc.Figure3"
                            @hide="handleHide(3)"
                            ></vue-easy-lightbox> <!-- Display zoomed image of figure3 -->
                        </div>

                        <div class = 'figure' v-show="cdc.Figure4"> <!-- Conditional block: only if figure4 exists -->
                            <img :src="cdc.Figure4" @click="show(4)"> <!-- Display image of figure4 (SDRE) -->
                            <vue-easy-lightbox
                            :visible="visible4"
                            :imgs="cdc.Figure4"
                            @hide="handleHide(4)"
                            ></vue-easy-lightbox> <!-- Display zoomed image of figure4 -->
                        </div>

                        <div class = 'figure' v-show="cdc.Figure5"> <!-- Conditional block: only if figure5 exists -->
                            <img :src="cdc.Figure5" @click="show(5)"> <!-- Display image of figure5 (SDRE) -->
                            <vue-easy-lightbox
                            :visible="visible5"
                            :imgs="cdc.Figure5"
                            @hide="handleHide(5)"
                            ></vue-easy-lightbox> <!-- Display zoomed image of figure5 -->
                        </div>

                        <div class = 'figure' v-show="cdc.Figure6"> <!-- Conditional block: only if figure6 exists -->
                            <img :src="cdc.Figure6" @click="show(6)"> <!-- Display image of figure6 (SDRE) -->
                            <vue-easy-lightbox
                            :visible="visible6"
                            :imgs="cdc.Figure6"
                            @hide="handleHide(6)"
                            ></vue-easy-lightbox> <!-- Display zoomed image of figure6 -->
                        </div>

                        <!-- Referenced from block, each refernce displayed only -->
                        <p style="font-size: 16px;" v-show="(cdc.Link || cdc.Figure1 || cdc.Figure2 || cdc.Figure3 || cdc.Figure4 || cdc.Figure5 || cdc.Figure6)"> 
                            Referenced from:
                            <a v-bind:href="cdc.Link" target="_blank" v-show="cdc.Link">CDC {{cdc.chapterID}} - {{cdc.Chapter}}</a>
                            <span v-show="cdc.Link && cdc.Figure1">, </span>
                            <a v-bind:href="cdc.Figure1Link" target="_blank" v-show="cdc.Figure1">CDC {{cdc.Figure1Chapter}}</a>
                            <span v-show="(cdc.Link || cdc.Figure1) && cdc.Figure2">, </span>
                            <a v-bind:href="cdc.Figure2Link" target="_blank" v-show="cdc.Figure2">CDC {{cdc.Figure2Chapter}}</a>
                            <span v-show="(cdc.Link || cdc.Figure1 || cdc.Figure2) && cdc.Figure3">, </span>
                            <a v-bind:href="cdc.Figure3Link" target="_blank" v-show="cdc.Figure3">CDC {{cdc.Figure3Chapter}}</a>
                            <span v-show="(cdc.Link || cdc.Figure1 || cdc.Figure2 || cdc.Figure3) && cdc.Figure4">, </span>
                            <a v-bind:href="cdc.Figure4Link" target="_blank" v-show="cdc.Figure4">SDRE {{cdc.Figure4Chapter}}</a>
                            <span v-show="(cdc.Link || cdc.Figure1 || cdc.Figure2 || cdc.Figure3 || cdc.Figure4) && cdc.Figure5">, </span>
                            <a v-bind:href="cdc.Figure5Link" target="_blank" v-show="cdc.Figure5">SDRE {{cdc.Figure5Chapter}}</a>
                            <span v-show="(cdc.Link || cdc.Figure1 || cdc.Figure2 || cdc.Figure3 || cdc.Figure4 || cdc.Figure5) && cdc.Figure6">, </span>
                            <a v-bind:href="cdc.Figure6Link" target="_blank" v-show="cdc.Figure6">SDRE {{cdc.Figure6Chapter}}</a>
                        </p>
                        <p class="collapseTitle-text"  v-show="cdc.Number2">
                            <b style="grid-column:1; grid-row:1;">{{cdc.Number2}}</b><b style="grid-column:2; grid-row:1;">{{cdc.Content2}}</b>
                        </p>
                            <p v-html="cdc.Text2" v-show="cdc.Text2"></p>
                        <div class = 'formula' v-show="cdc.Formula2"> <!-- Conditional block: only if formula exists -->
                            <img :src="cdc.Formula2" @click="show(11)"> <!-- Display image of formula -->
                            <vue-easy-lightbox
                            :visible="visible11"
                            :imgs="cdc.Formula2"
                            @hide="handleHide(11)"
                            ></vue-easy-lightbox> <!-- Display zoomed image of formula -->
                        </div>
                        <div class = 'figure' v-show="cdc.Figurenum3"> <!-- Conditional block: only if figure4 exists -->
                            <img :src="cdc.Figurenum3" @click="show(12)"> <!-- Display image of figure4 (SDRE) -->
                            <vue-easy-lightbox
                            :visible="visible12"
                            :imgs="cdc.Figurenum3"
                            @hide="handleHide(12)"
                            ></vue-easy-lightbox> <!-- Display zoomed image of figure4 -->
                        </div>
                        <p style="font-size: 16px;" v-show="cdc.Linknum2"> Referenced from:
                            <a v-bind:href="cdc.Linknum2" target="_blank" v-show="cdc.Linknum2">CDC {{cdc.Id2}} - {{cdc.Chapternum2}}</a>
                            <a v-bind:href="cdc.Linknumfig3" target="_blank" v-show="cdc.Linknumfig3">, CDC {{cdc.Idfig3}}</a>
                        </p>

                        <p class="collapseTitle-text" v-show="cdc.Number3">
                            <b style="grid-column:1; grid-row:1;">{{cdc.Number3}}</b><b style="grid-column:2; grid-row:1;">{{cdc.Content3}}</b>
                        </p>
                            <p v-html="cdc.Text3" v-show="cdc.Text3"></p>
                        <div class = 'formula' v-show="cdc.Formula3"> <!-- Conditional block: only if formula exists -->
                            <img :src="cdc.Formula3" @click="show(15)"> <!-- Display image of formula -->
                            <vue-easy-lightbox
                            :visible="visible15"
                            :imgs="cdc.Formula3"
                            @hide="handleHide(15)"
                            ></vue-easy-lightbox> <!-- Display zoomed image of formula -->
                        </div>
                        <div class = 'figure' v-show="cdc.Figurenum4"> <!-- Conditional block: only if figure4 exists -->
                            <img :src="cdc.Figurenum4" @click="show(13)"> <!-- Display image of figure4 (SDRE) -->
                            <vue-easy-lightbox
                            :visible="visible13"
                            :imgs="cdc.Figurenum4"
                            @hide="handleHide(13)"
                            ></vue-easy-lightbox> <!-- Display zoomed image of figure4 -->
                        </div>
                        <div class = 'figure' v-show="cdc.Figurenum5"> <!-- Conditional block: only if figure4 exists -->
                            <img :src="cdc.Figurenum5" @click="show(14)"> <!-- Display image of figure4 (SDRE) -->
                            <vue-easy-lightbox
                            :visible="visible14"
                            :imgs="cdc.Figurenum5"
                            @hide="handleHide(14)"
                            ></vue-easy-lightbox> <!-- Display zoomed image of figure4 -->
                        </div>
                        
                        <p style="font-size: 16px;" v-show="cdc.Linknum3"> Referenced from:
                            <a v-bind:href="cdc.Linknum3" target="_blank" v-show="cdc.Linknum3">CDC {{cdc.Id3}} - {{cdc.Chapternum3}}</a>
                            <a v-bind:href="cdc.Linknumfig4" target="_blank" v-show="cdc.Linknumfig4">, CDC {{cdc.Idfig4}}</a>
                            <a v-bind:href="cdc.Linknumfig5" target="_blank" v-show="cdc.Linknumfig5">, CDC {{cdc.Idfig5}}</a>
                        </p>

                        <p class="collapseTitle-text" v-show="cdc.Number4">
                            <b style="grid-column:1; grid-row:1;">{{cdc.Number4}}</b><b style="grid-column:2; grid-row:1;">{{cdc.Content4}}</b>
                        </p>
                            <p v-html="cdc.Text4" v-show="cdc.Text4"></p>
                        <p style="font-size: 16px;" v-show="cdc.Linknum4"> Referenced from:
                            <a v-bind:href="cdc.Linknum4" target="_blank" v-show="cdc.Linknum4">CDC {{cdc.Id4}} - {{cdc.Chapternum4}}</a>
                        </p>

                        <p class="collapseTitle-text" v-show="cdc.Number5">
                            <b style="grid-column:1; grid-row:1;">{{cdc.Number5}}</b><b style="grid-column:2; grid-row:1;">{{cdc.Content5}}</b>
                        </p>
                            <p v-html="cdc.Text5" v-show="cdc.Text5"></p>
                        <p style="font-size: 16px;" v-show="cdc.Linknum5"> Referenced from:
                            <a v-bind:href="cdc.Linknum5" target="_blank" v-show="cdc.Linknum5">CDC {{cdc.Id5}} - {{cdc.Chapternum5}}</a>
                        </p>

                        <p class="collapseTitle-text" v-show="cdc.Number6">
                            <b style="grid-column:1; grid-row:1;">{{cdc.Number6}}</b><b style="grid-column:2; grid-row:1;">{{cdc.Content6}}</b>
                        </p>
                            <p v-html="cdc.Text6" v-show="cdc.Text6"></p>
                        <div class = 'figure' v-show="cdc.Figurenum6"> <!-- Conditional block: only if figure4 exists -->
                            <img :src="cdc.Figurenum6" @click="show(9)"> <!-- Display image of figure4 (SDRE) -->
                            <vue-easy-lightbox
                            :visible="visible9"
                            :imgs="cdc.Figurenum6"
                            @hide="handleHide(9)"
                            ></vue-easy-lightbox> <!-- Display zoomed image of figure4 -->
                        </div>
                        <p style="font-size: 16px;" v-show="cdc.Linknum6"> Referenced from:
                            <a v-bind:href="cdc.Linknum6" target="_blank" v-show="cdc.Linknum6">SDRE {{cdc.Id6}} </a>
                        </p>

                        <p class="collapseTitle-text" v-show="cdc.Number7">
                            <b style="grid-column:1; grid-row:1;">{{cdc.Number7}}</b><b style="grid-column:2; grid-row:1;">{{cdc.Content7}}</b>
                        </p>
                            <p v-html="cdc.Text7" v-show="cdc.Text7"></p>
                        <div class = 'figure' v-show="cdc.Figurenum7"> <!-- Conditional block: only if figure4 exists -->
                            <img :src="cdc.Figurenum7" @click="show(10)"> <!-- Display image of figure4 (SDRE) -->
                            <vue-easy-lightbox
                            :visible="visible10"
                            :imgs="cdc.Figurenum7"
                            @hide="handleHide(10)"
                            ></vue-easy-lightbox> <!-- Display zoomed image of figure4 -->
                        </div>
                        <p style="font-size: 16px;" v-show="cdc.Linknum7"> Referenced from:
                            <a v-bind:href="cdc.Linknum7" target="_blank" v-show="cdc.Linknum7">SDRE {{cdc.Id7}}</a>
                        </p>

                    </Collapsible>
                </li>                        
            </ul>
    </div>
</div>
    <ManualButton id="mybut" link="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/civil_standards/pdf/EGD09106A2_Overall.pdf" name="CDC" />
    <ManualButton id="mybut" link="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/Street_Work_Proposals/Standards_and_Specifications/SDRE/Content_Page_JULY_2020.pdf" name="SDRE" />
    <br><br>
    <div id="COP">
        You may also be interested in:
    </div>
    <br>
    <ManualButton id="mybut" link="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/Street_Work_Proposals/codes_of_practice/RT-COP_V2.0_April_2019.pdf" name="COP" />
</template>

<script scoped>
/**  firebase to access the firebase storage system and related documents*/
import database from '../firebase.js'; 
import firebase from 'firebase/app';
import 'firebase/firestore';
/** Collapsible to collapse all and expand all */
import Collapsible from '../components/Collapsible.vue';
import HomeButton from '../components/HomeButton.vue';
import ManualButton from '../components/ManualButton.vue';
export default {
    components: {
        Collapsible, 
        HomeButton,
        ManualButton
    },
    data() {
        return {
            order : [],
            sorted_order : [],
            cdc_array : [],
            final_array : [],
            related_parameter : [],
            /** Store related search parameters in the respectie array */
            level_1_parameter : [],
            level_2_parameter : [],
            level_3_parameter : [],
            level_4_parameter : [],
            choice2 : '',
            specific_param:"",
            levelDisplay: false,
            /** Toggle between showing and hiding the zoomed images (Hide by default)*/
            visible1: false,
            visible2: false,
            visible3: false,
            visible4: false,
            visible5: false,
            visible6: false,
            visible7: false,
            visible8: false,
            visible9: false,
            visible10: false,
            visible11: false,
            visible12: false,
            visible13: false,
            visible14: false,
            visible15: false
        } 
    },
    methods : {
        /** Shows the zoomed images for the corresponding ID */
        show(param) {
            if(param == 1) {
                this.visible1 = true;
            }
            else if (param == 2) {
                this.visible2 = true;
            }
            else if (param == 3) {
                this.visible3 = true;
            }
            else if (param == 4) {
                this.visible4 = true;
            }
            else if (param == 5) {
                this.visible5 = true;
            }
            else if (param == 6) {
                this.visible6 = true;
            }
            else if (param == 7) {
                this.visible7 = true;
            }
            else if (param == 8) {
                this.visible8 = true;
            }
            else if (param == 9) {
                this.visible9 = true;
            }
            else if (param == 10) {
                this.visible10 = true;
            }
            else if (param == 11) {
                this.visible11 = true;
            }
            else if (param == 12) {
                this.visible12 = true;
            }
            else if (param == 13) {
                this.visible13 = true;
            }
            else if (param == 14) {
                this.visible14 = true;
            }
            else if (param == 15) {
                this.visible15 = true;
            }
        },
        /** Shows the zoomed images for the corresponding ID */
        handleHide(param) {
            if(param == 1) {
                this.visible1 = false;
            }
            else if (param == 2) {
                this.visible2 = false;
            }
            else if (param == 3) {
                this.visible3 = false;
            }
            else if (param == 4) {
                this.visible4 = false;
            }
            else if (param == 5) {
                this.visible5 = false;
            }
            else if (param == 6) {
                this.visible6 = false;
            }
            else if (param == 7) {
                this.visible7 = false;
            }
            else if (param == 8) {
                this.visible8 = false;
            }
            else if (param == 9) {
                this.visible9 = false;
            }
            else if (param == 10) {
                this.visible10 = false;
            }
            else if (param == 11) {
                this.visible11 = false;
            }
            else if (param == 12) {
                this.visible12 = false;
            }
            else if (param == 13) {
                this.visible13 = false;
            }
            else if (param == 14) {
                this.visible14 = false;
            }
            else if (param == 15) {
                this.visible15 = false;
            }
        },
        /** Local storage to access the choice of user */
        openStorage(){
            return JSON.parse(localStorage.getItem('choice'))
        },
        /** Saves the choice of the user to local storage */
        saveStorage(form){
            localStorage.setItem('choice',JSON.stringify(form))
        },
        /** Updates the local storage of the User and adds to the analytics database */
        updateChoice(input,value){
            this.choice[input].push(value)
            let storedChoice = this.openStorage()
            if(!storedChoice) {
                storedChoice = {}
                storedChoice[input] = []
            }
            storedChoice[input].push(value)
            while (this.choice[input].length > 5) {
                this.choice[input].shift()
            }
            while (storedChoice.length > 5) {
                storedChoice[input].shift()
            }
            this.saveStorage(storedChoice) 
            var myparam = database.collection('search_parameters').doc("H1uwnxYevFozEeNv7SiY");
            myparam.update({
                [value]: firebase.firestore.FieldValue.increment(1) /** Increment on the database */
            }).then(res => {
                this.specific_param = this.choice.specific_param.at(-1);
                if (this.specific_param == "Signs") {
                    this.$router.push('specific-results-signs')
                }
                else {
                    window.location.reload()  /** Refresh the same page with the new search parameter chosen */
                }
                res;
            });
        },
        storeSpecParam(text){
            this.updateChoice('specific_param',text)
        },
        /** Return to the previous page based on the second last search parameter in local storage */
        goBack() {
            if (this.choice.specific_param.length > 1) {
                this.choice.specific_param.pop();
            }
            let storedChoice = this.openStorage();
            if (storedChoice.specific_param.length > 1) {
                storedChoice.specific_param.pop();
                this.saveStorage(storedChoice);
                window.location.reload();
            } else {
                this.$router.go(-1);
            }
        },
        display(parameter){
            this.choice2 = parameter;
            database.collection('data_cdc').doc(parameter).get().then(querySnapshot => {
                var temp_order = querySnapshot.data().Order;
                this.order = temp_order.split(" ");                
                this.sorted_order = this.order.slice();
                this.sorted_order = this.sorted_order.sort();
            });
            database.collection('data_cdc').doc(parameter).collection('CDC Documents').get().then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    let lst = {};
                    lst = doc.data();
                    lst.chapterID = doc.id;
                    this.cdc_array.push(lst);
                })
            }).then(result => {
                for (let i = 0; i < this.sorted_order.length; i++) {
                    var element_to_find = this.order[i];
                    var index = this.sorted_order.indexOf(element_to_find);
                    this.cdc_array[index].Text = this.cdc_array[index].Text.replaceAll("\\n", "<p>");
                    this.final_array.push(this.cdc_array[index]);
                    result;
                }
            });
            database.collection('data_cdc').doc(parameter).collection('Related Parameters').get().then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    let lst = {};
                    lst = doc.data();
                    lst.Name = doc.id;
                    if (lst.Level == 1) {
                        this.level_1_parameter.push(lst);
                    } else if (lst.Level == 2) {
                        this.level_2_parameter.push(lst);
                    } else if (lst.Level == 3) {
                        this.level_3_parameter.push(lst);
                    } else if (lst.Level == 4) {
                        this.level_4_parameter.push(lst);
                    }
                })
            });
        },
        levelCollapse() {
            this.levelDisplay = !this.levelDisplay;
        },
    },
    mounted() {
        this.display(this.specific_param);
    },
    created() {
        const storedChoice = this.openStorage();
        if (storedChoice){
            this.choice = {
            ...this.choice,
            ...storedChoice
            }
        }
        this.specific_param = String(this.choice.specific_param.at(-1));
    }
}
</script>

<style>
@import url(https://fonts.googleapis.com/css?family=Roboto);
* {
  margin: 0;
  padding: 0;
  font-family: "Roboto", sans-serif;
}
#entire-content {
    display: flex;
    align-items: left;
    flex-direction: row;
}
#buttons {
    position:sticky;
    top: 30px;
    height: 20%;
    width: 20vw;
}
#specific-results {
    width: 80%;
    align-items: left;    
    background-color: #ffffff;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
    border-radius: 20px;
    padding: 15px;
    font-size:20px;
    margin-bottom:12%;
    justify-content:center;
}
#back {
    width:fit-content;
    height:fit-content;
    font-size: 1.5rem;
    box-shadow:none;
    border:none;
    margin-bottom:30px;
}
#mybut {
    width:120px;
    height:30px;
    display: inline;
    text-align: center;
    font-size: 0.8rem;
    padding: 1.2%;
    padding-bottom: 30px;
}
#mybutt {
    width:90%;
    display: inline;
    text-align: center;
    font-size: 0.9rem;
    padding: 2%;
    display: flex;
    justify-content: center;
    align-items: center;
}
#COP {
    display: inline;
    float: left;
    font-style: italic;
    color: #273B8C;
}
.formula {
    width: 50%;
    height: auto;
    margin-left: 8em;
    margin-top: 3%;
    margin-bottom: 3%;
}
.table {
    width: 80%;
    height: auto;
    margin-left: 3em;
}
.figure {
    width: 100%;
    height: auto;
}
.arrow {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    color: #273B8C;
}
ul {
    list-style-type: none;
    padding:0;
    margin:0;
}
img {
    width: 100%;
}
#current_btn {
  pointer-events: none;
  cursor: not-allowed;
  background:#8F3035;
  
}
button {
    width: 200px;
    margin-bottom: 5px;
    margin-top:5px;
    padding:5px;
    display: inline;
    height: 50px;
    background: #273B8C;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
    border-radius: 15px;
    font-style: normal;
    font-weight: normal;
    color: #FFFFFF;
    font-size:15px;
    border:none;
}
.btn-outline-secondary {
    color: black;
}
.action_btn {
    width: 100%;
    display: flex;
    margin-bottom:15px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
#manual{
  font-weight:bold;
  width: 100%;
  table-layout:fixed;
}
td {
    width: 15%;
    text-align: left;
}
#chapter{
  font-weight:bold;
}
#link{
  font-weight:bold;
}
.tab2 {
 margin-right: 1.7em
}
.title {
  cursor: pointer;
  display: flex;
  margin-top: 3%;
  padding: 1% 0;
  font-weight: bold;
}
.title-text {
  display: flex;
  align-items: center;
  flex: 1;
  font-size: 20px;
}
.expand {
  text-align: right;
  font-size: 1rem;
  color: navy;
  margin: 2% 10%;
}
ol > li {
  padding-left:0.5rem;
  margin: 10px 0
}

.collapseTitle-text {
  display: grid;
  align-items: center;
  font-size: 20px;
  grid-template-columns: 5rem auto;
}

</style>
<style scoped>
img:hover {
  cursor: -webkit-zoom-in;
  cursor: zoom-in;
}
</style>