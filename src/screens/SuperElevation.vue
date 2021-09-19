<template>
    <div>
        <div class="action_btn" v-for='param in level_1_parameter' :key='param.Name'>
            <button>{{param.Name}}</button>
        </div>
        <br>
        <div class="action_btn" v-for='param in level_2_parameter' :key='param.Name'>
            <button>{{param.Name}}</button>
        </div>
        <div class="action_btn" v-for='param in level_3_parameter' :key='param.Name'>
            <button>{{param.Name}}</button>
        </div>
        <br>
        <div class="action_btn" v-for='param in level_3_parameter' :key='param.Name'>
            <button>{{param.Name}}</button>
        </div>
        <br>
        <div class="action_btn" v-for='param in level_4_parameter' :key='param.Name'>
            <button>{{param.Name}}</button>
        </div>
    </div>

      <table class="table table-borderless">        
        <tbody>
          <tr>
            <td scope="row">
                <div class="content">
                <ul>
                    <li v-for="cdc in final_array" :key="cdc.chapterID">
                        {{cdc.chapterID}}
                        <br>
                        {{cdc.Text}}
                        <br>
                        <img :src="cdc.Image">
                    </li>
                </ul>
                </div>
            </td>
          </tr>
          <tr>
            <td scope='row'>
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
            </td>
          </tr>
        </tbody>
      </table>
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
            level_4_parameter : []
        } 
    },

    methods : {
        display:function(){
            database.collection('data_cdc').doc('Super-Elevation').get().then(querySnapshot => {
                var temp_order = querySnapshot.data().Order;
                this.order = temp_order.split(" ");                
                this.sorted_order = this.order.slice();
                this.sorted_order = this.sorted_order.sort();
            });
            database.collection('data_cdc').doc('Super-Elevation').collection('CDC Documents').get().then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    let lst = {};
                    lst = doc.data();
                    lst.chapterID = doc.id;
                    this.cdc_array.push(lst);
                })
            }).then(result => {
                for (let i = 0; i < this.sorted_order.length; i++) {
                    var element_to_find = this.sorted_order[i];
                    console.log(element_to_find);
                    var index = this.order.indexOf(element_to_find);
                    this.final_array.push(this.cdc_array[index]);
                    result;
                }
            });
            database.collection('data_cdc').doc('Super-Elevation').collection('Related Parameters').get().then(querySnapshot => {
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
        this.display();
    }

}
</script>

<style scoped>
table {
  width: 70vw;
  height: 60vh;
  margin-top: 10vh;
  border-radius: 15px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
  z-index: 999;
}
.table thead td {
    background-color: #273B8C;
    color: white;
    height: 6vh;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    font-size:22px;
    text-indent:1.5%;
}
tbody tr{
    background-color: #ffffff;
}

tbody tr:last-child td{ 
  border-bottom-right-radius: 15px; 
  border-bottom-left-radius: 15px; 
}

.content{
  font-size:20px;
  margin: 2% 10%;
}

.grid-container{
  margin:5% 5% -8%;
  font-size:20px;
}

.grid-item {
	padding: 10px;
  font-size:16px;
}

.grid-container .inner-grid-container {
	display: grid;
	grid-template-columns: auto auto auto;
	text-align: center;
}

.buttons {
    width: 200px;
    margin: 20 auto;
    display: inline;
    padding: 20;
}

.action_btn {
    width: 200px;
    margin: 0 auto;
    display: inline-block;
    justify-content: center;
    align-items: center;
}

#manuals{
  font-weight:bold;
}

#chapter{
  font-weight:bold;
}

#link{
  font-weight:bold;
}
</style>

