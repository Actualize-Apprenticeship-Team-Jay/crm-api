/* global Vue */
document.addEventListener("DOMContentLoaded", function(event) { 
  var app = new Vue({
    el: '#app',
    data: {
      leads: [],
      time_format: "12/25/17",
      url: "https://www.google.com/"
    },
    mounted: function() {
      $.get('/api/v1/leads.json').success(function(response) {
        console.log(this);
        this.leads = response;
        this.leads.map(function(lead){
          app.$set(lead, 'visible', false);
        });
      }.bind(this));
    },
    methods: {
      moment: function(date) {
        return moment(date);
      },
      showHistory: function(lead) {
        lead.visible = true;
      },
      isVisible: function(lead) {
        return lead.visible;
      }
    },
    computed: {

    },
  });
});
