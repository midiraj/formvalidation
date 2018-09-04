Vue.component('signUpForm',{
	template:'#signUpForm',
	data(){
		return {
			password:'',
			confirmPassword:'',
			email:'',
			msg:[],
			disableSubmitButton:true,
		}
	},
	watch:{
		email(value){
			this.eventName();
			this.email = value;
			// console.log(value);
			this.check_email(value);
		},
		password(value){
			this.eventName();
			this.password = value;
			this.check_pass(value);
		},
		confirmPassword(value){
			this.eventName();
			this.confirmPassword = value;
			this.check_confpass(value);
		}

	},
	methods:{
		changeToTnc(){
			this.$emit('change','tnc');
		},
		check_email(value){
			if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value))
			 {
			   this.msg['email']='';
			 }
			  else{
			  	this.msg['email']='Keep Typing We Are Waiting For Correct Email...';
			  }
		},
		check_pass(value){
			
			this.passwordLengthCheck(value);
		
		},
		check_confpass(value){
			
			this.passwordLengthCheck(value);

		},
		passwordLengthCheck(passwordToCheck){
			remainChar = 6 - passwordToCheck.length;
			if (passwordToCheck.length < 6) {
				this.msg['password'] = 'Password Must Contain 6 Characters ' + remainChar + ' to go...';
			}
			else
			{
				this.msg['password'] = '';
			}
		},
		eventName(){
			name = event.target.name;
		}
	},

});
Vue.component('tnc',{
	template:'#tnc',
	methods:{
		changeToSignUp(){
			this.$emit('change','signUpForm');
		}
	}
});

new Vue({
	el:'#app',
	data:{
		componentName:'signUpForm',
	},
	methods:{
		change(newCom){
			this.componentName = newCom;
		},
	}
})