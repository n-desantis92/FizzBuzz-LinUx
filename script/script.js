new Vue({
    el: '#app',
    data: {
        numero: prompt('inserisci un numero'),
        numeri: []
    },
    mounted() {
        this.linUx(this.numero);
    },
    methods: {
        linUx: function(n) {
            
            let result = [];
            for (let i = 1; i <= n; i++) {
                if (i % 3 == 0 && i % 4 == 0 ) {
                    result.push('linux');

                }else if(i % 3 == 0) {
                    result.push('lin');
                }else if(i % 4 == 0) {
                    result.push('ux');
                }else {

                    result.push(i);
                }
            }
            this.numeri = result;
        }
    }
})