<template>
    <div class="hotWorks" id="hotWorks"></div>
</template>

<script>
    export default {
        data (){
            return {
                gridData:[],
                ajaxData:[]
            }
        },

        mounted (){
            // this.$http.jsonp('http://211.149.193.19:8080/api/customers').then(function(response){
            //     this.$set(this.gridData, response.data)
            //     console.log(response.data)
            // })
            // this.$http.jsonp('http://inewsengine.com/jfrb/api/burst/news?size=20').then(function(response){
            //     this.$set(this.ajaxData, response.data)
            //     console.log(response.data)
            // })

            // this.$http.jsonp('http://10.50.1.191/uec/originalstat').then(function(response){
            //     // this.$set(this.ajaxData, response.data)
            //     console.log(response)
            //     this.$set(this.ajaxData, response.data)
            // })
        }
    }
</script>
