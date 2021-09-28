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
            <!--br v-show='level_4_parameter.length != 0'-->
            <div class="arrow" v-show='level_4_parameter.length != 0'>
                <i class="bi bi-arrow-up"></i>
            </div>
            <div class="action_btn" v-show='level_3_parameter.length != 0'>
                <button v-for='param in level_3_parameter' :key='param.Name' @click="storeSpecParam(param.Name)">{{param.Name}}</button>
            </div>
            <!--br v-show='level_3_parameter.length != 0'-->
            <div class="arrow" v-show='level_3_parameter.length != 0'>
                <i class="bi bi-arrow-up"></i>
            </div>
            <div class="action_btn" v-show='level_2_parameter.length != 0'>
                <button v-for='param in level_2_parameter' :key='param.Name' @click="storeSpecParam(param.Name)">{{param.Name}}</button>
            </div>
            <!--br v-show='level_2_parameter.length != 0'-->
            <div class="arrow" v-show='level_2_parameter.length != 0'>
                <i class="bi bi-arrow-up"></i>
            </div>
            <div class="action_btn" v-show='level_1_parameter.length != 0'>
                <button v-for='param in level_1_parameter' :key='param.Name' @click="storeSpecParam(param.Name)">{{param.Name}}</button>
            </div>
        </div>
        <!--h3><b>{{this.choice2}}</b></h3-->
        <div id = "specific-results">
            <ul>
                <li v-for="cdc in final_array" :key="cdc.chapterID">
                    <p><b class="tab2">{{cdc.Number}}</b><b>{{cdc.Content}}</b></p>
                    <p v-html="cdc.Text"></p>
                    <div class='image'>
                        <img :src="cdc.Image" style='zoom: 1'>
                    </div>
                    <p style="font-size: 16px;"> Referenced from:
                    <a v-bind:href="cdc.Link">CDC {{cdc.chapterID}} - {{cdc.Chapter}}</a>
                    </p>
                </li>                        
                <!--li v-for="cdc in final_array" :key="cdc.chapterID">
                    <div class='chapter-text-image'>
                        <div class='chapter'>
                            <b>{{cdc.chapterID}}</b>  
                        </div>
                        <div class='text-image'>
                            <div class='text' v-html="cdc.Text"></div>
                            <br>
                            <div class='image'>
                                <img :src="cdc.Image" style='zoom: 1.2'>
                            </div>
                        </div>
                    </div>
                    <br>
                </li-->
            </ul>
            <!--table class="manual">
                <tr>
                    <th>Content</th>
                    <th>Manual</th>
                    <th>Chapter/ Section</th>
                    <th>Link to Chapter/ Section</th>
                </tr>
                <tr v-for='cdc in final_array' :key="cdc.chapterID">
                    <td>{{cdc.Content}}</td>
                    <td>{{cdc.Manual}}</td>
                    <td>{{cdc.chapterID}}: {{cdc.Chapter}}</td>
                    <td style="word-break:break-all;"><a v-bind:href="cdc.Link">{{cdc.Link}}</a></td>
                </tr>
            </table-->
        </div>
    </div>
    
    <button id="back" type="button" class="btn btn-outline-secondary" @click="goBack()">
      <i class="bi bi-arrow-left"></i>
    </button>
</template>

<script>
import database from '../firebase.js'
import firebase from 'firebase/app';
import 'firebase/firestore';

export default {
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
            specific_param:""
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
                window.location.reload();
                res;
            });
        },

        storeSpecParam(text){
            this.updateChoice('specific_param',text)
/** 
            this.specific_param = this.choice.specific_param.at(-1);
            window.location.reload();
*/
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

        display:function(parameter){
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


    },
    mounted() {
        this.display(this.specific_param);
    },
    created(){
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
    width: 20%;
}

#specific-results {
    width: 80%;
    align-items: left;    
    background-color: #ffffff;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
    border-radius: 20px;
    padding: 40px;
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
}

.arrow {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2.5rem;
    color: #273B8C;
}

ul {
    list-style-type: none;
}
/** 
.chapter-text-image {
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: left;   
}

.chapter {
    width: 20%;
    align-items: left;         
}

.text-image {
    width: 100%;
    align-items: right;
}
*/
.image {
    display: flex;
    justify-content:center;
}
/** 
img {
    width: 50%;
}
*/
#current_btn {
  pointer-events: none;
  cursor: not-allowed;
  background: gold;    
}

button {
    width: 200px;
    margin: 20 auto;
    display: inline;
    padding: 30;
    height: 80px;
    background: #273B8C;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
    border-radius: 20px;
    font-style: normal;
    font-weight: normal;
    color: #FFFFFF;
    font-size:26px;
}

.action_btn {
    width: 100%;
    display: flex;
/*    gap: 60px; */
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

</style>

