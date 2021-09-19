<template>
    <div>
        <div class="action_btn">
            <button v-for='param in level_1_parameter' :key='param.Name'>{{param.Name}}</button>
        </div>
        <br>
        <div class="action_btn">
            <button v-for='param in level_2_parameter' :key='param.Name'>{{param.Name}}</button>
        </div>
        <br>
        <div class="action_btn">
            <button v-for='param in level_3_parameter' :key='param.Name'>{{param.Name}}</button>
        </div>
        <br>
        <div class="action_btn">
            <button v-for='param in level_4_parameter' :key='param.Name'>{{param.Name}}</button>
        </div>
        <br>
    </div>
    <h3><b>{{this.choice}}</b></h3>
    <div id = "specific-results">
        <ul>
            <li v-for="cdc in final_array" :key="cdc.chapterID">
                <div class='chapter-text-image'>
                    <div class='chapter'>
                        <b>{{cdc.chapterID}}</b>  
                    </div>
                    <div class='text-image'>
                        <div class='text'>
                            {{cdc.Text}}
                        </div>
                        <div class='image'>
                            <img :src="cdc.Image">
                        </div>
                    </div>
                </div>
            </li>
        </ul>
        <table class="manual">
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
        </table>
    </div>
</template>

<script>
import database from '../firebase.js'

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
            choice : ''
        } 
    },

    methods : {
        display:function(parameter){
            this.choice = parameter;
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
                    console.log(element_to_find);
                    var index = this.sorted_order.indexOf(element_to_find);
                    //this.cdc_array[index].Text = this.cdc_array[index].Text.replaceAll("\\n", "\n");
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
        this.display('Horizontal Alignment');
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

#specific-results {
    background-color: #ffffff;
    box-shadow: 4px 4px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    padding: 40px;
    font-size:22px;
}

ul {
    list-style-type: none;
}

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

button {
    width: 300px;
    margin: 20 auto;
    display: inline;
    padding: 30;
    height: 80px;
    background: #273B8C;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    font-style: normal;
    font-weight: normal;
    color: #FFFFFF;
    font-size:22px;
}

.action_btn {
    width: 100%;
    display: flex;
    gap: 30px;
    flex-direction: row;
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
</style>

