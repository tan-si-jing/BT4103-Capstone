<template>
    <div id = "entire-content">
        <div id = "buttons">
            <p>Currently Viewing : </p> 
            <div class="action_btn">
                <button id='current_btn'>{{this.choice2}}</button>
            </div>
            <div class="arrow" v-show='level_4_parameter.length != 0 || level_3_parameter.length != 0 || level_2_parameter.length != 0 || level_1_parameter.length != 0'>
                <i class="bi bi-arrow-up"></i>
            </div>

            <p v-show='level_4_parameter.length != 0 || level_3_parameter.length != 0 || level_2_parameter.length != 0 || level_1_parameter.length != 0'>Other Relevant Results : </p>
            <div class="action_btn" v-show='level_4_parameter.length != 0'>
                <button v-for='param in level_4_parameter' :key='param.Name' @click="storeSpecParam(param.Name)">{{param.Name}}</button>
            </div>

            <div class="arrow" v-show='level_4_parameter.length != 0 && (level_3_parameter.length != 0 || level_2_parameter.length != 0 || level_1_parameter.length != 0)'>
                <i class="bi bi-arrow-up"></i>
            </div>
            <div class="action_btn" v-show='level_3_parameter.length != 0'>
                <button v-for='param in level_3_parameter' :key='param.Name' @click="storeSpecParam(param.Name)">{{param.Name}}</button>
            </div>

            <div class="arrow" v-show='level_3_parameter.length != 0 && (level_2_parameter.length != 0 || level_1_parameter.length != 0)'>
                <i class="bi bi-arrow-up"></i>
            </div>
            <div class="action_btn" v-show='level_2_parameter.length != 0'>
                <button v-for='param in level_2_parameter' :key='param.Name' @click="storeSpecParam(param.Name)">{{param.Name}}</button>
            </div>

            <div class="arrow" v-show='level_2_parameter.length != 0 && level_1_parameter.length != 0'>
                <i class="bi bi-arrow-up"></i>
            </div>
            <div class="action_btn" v-show='level_1_parameter.length != 0'>
                <button v-for='param in level_1_parameter' :key='param.Name' @click="storeSpecParam(param.Name)">{{param.Name}}</button>
            </div>
        </div>
        <div id = "specific-results">
            <div class="expand">
              <span @click=levelCollapse() style="cursor:pointer;">
                <span v-if="!levelDisplay"><u>Expand All</u> &nbsp;<i class="bi bi-caret-down-fill"></i></span>
                <span v-if="levelDisplay"><u>Collapse All</u> &nbsp;&nbsp;<i class="bi bi-caret-up-fill"></i></span>
              </span>
            </div>
            <ul>
                <li v-for="cdc in final_array" :key="cdc.chapterID">
                    <Collapsible :title="cdc.Content" :chapt="cdc.Number" :levelDisplay="levelDisplay">
                        <p v-html="cdc.Text"></p>
                        
                        <div class = 'formula' v-show="cdc.Formula">
                            <img :src="cdc.Formula">
                        </div>

                        <div class='table' v-show="cdc.Table">
                            <img :src="cdc.Table" style='zoom: 1.2'>
                        </div>

                        <div class = 'figure' v-show="cdc.Figure1">
                            <img :src="cdc.Figure1" >
                        </div>

                        <div class = 'figure' v-show="cdc.Figure2">
                            <img :src="cdc.Figure2" >
                        </div>

                        <div class = 'figure' v-show="cdc.Figure3">
                            <img :src="cdc.Figure3" >
                        </div>

                        <div class = 'figure' v-show="cdc.Figure4">
                            <img :src="cdc.Figure4" >
                        </div>

                        <div class = 'figure' v-show="cdc.Figure5">
                            <img :src="cdc.Figure5" >
                        </div>

                        <div class = 'figure' v-show="cdc.Figure6">
                            <img :src="cdc.Figure6" >
                        </div>

                        <p style="font-size: 16px;"> Referenced from:
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
                    </Collapsible>
                </li>                        
            </ul>
        </div>
    </div>
    <HomeButton id="mybut"/>
    <ManualButton id="mybut" link="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/civil_standards/pdf/EGD09106A2_Overall.pdf" name="CDC" />
    <ManualButton id="mybut" link="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/Street_Work_Proposals/Standards_and_Specifications/SDRE/Content_Page_JULY_2020.pdf" name="SDRE" />
    <br>
    <button id="back" type="button" class="btn btn-outline-secondary" @click="goBack()">
      <i class="bi bi-arrow-left" style="font-size: 15px;"> Go Back</i>
    </button>
</template>

<script scoped>
import database from '../firebase.js'
import firebase from 'firebase/app';
import 'firebase/firestore';
import Collapsible from '../components/Collapsible.vue';
import HomeButton from '../components/HomeButton.vue'
import ManualButton from '../components/ManualButton.vue'

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
            level_1_parameter : [],
            level_2_parameter : [],
            level_3_parameter : [],
            level_4_parameter : [],
            choice2 : '',
            specific_param:"",
            levelDisplay: false
        } 
    },

    methods : {
        openStorage(){
            return JSON.parse(localStorage.getItem('choice'))
        },
        saveStorage(form){
            localStorage.setItem('choice',JSON.stringify(form))
        },
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
                [value]: firebase.firestore.FieldValue.increment(1)
            }).then(res => {
                this.specific_param = this.choice.specific_param.at(-1);
                if (this.specific_param == "Signs") {
                    this.$router.push('specific-results-signs')
                }
                else {
                    window.location.reload()
                }
                res;
            });
        },
        storeSpecParam(text){
            this.updateChoice('specific_param',text)
        },
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
</style>

