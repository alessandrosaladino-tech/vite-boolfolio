<script>
import axios from 'axios';

export default {
    name: 'ContactsView',
    data() {
        return {
            name: '',
            email: '',
            phone: '',
            message: '',
            errors: [],
            loading: false,
            formSend: false
        }
    },
    methods: {
        sendForm() {

            this.loading = true
            this.errors = []
            this.formSend = false

            const payload = {
                name: this.name,
                email: this.email,
                phone: this.phone,
                message: this.message

            };
            axios.post('http://127.0.0.1:8000/api/contacts', payload)
                .then(response => {

                    const success = response.data.success

                    if (!success) {
                        this.errors = response.data.errors
                        console.log(response.data.errors);
                    } else {
                        console.log(response);
                        this.name = ''
                        this.email = ''
                        this.phone = ''
                        this.message = ''
                        this.formSend = true

                    }

                    this.loading = false


                })
                .catch(error => {
                    console.error(error.message)
                })
        }
    }
}
</script>

<template>
    <div class="container  bg_contact text-center">

        <h1 class="pt-5 text-danger">
            Contact me
        </h1>

        <div class="alert alert-success mt-2" role="alert" v-if="formSend">
            <strong>Form sended </strong>
        </div>

        <form action="#" class="my-5" v-on:submit.prevent="sendForm()">

            <div class="d-flex gap-4 justify-content-between pb-4">
                <div class="form-floating flex-grow-1">
                    <input type="text" class="form-control" :class="{ 'is-invalid': errors.name }" id="name"
                        placeholder="Mario Rossi" v-model="name">
                    <label for="name">Name</label>
                    <div class="alert alert-danger mt-2" role="alert" v-if="errors.name">
                        <strong>Errors! </strong>
                        <span v-for="message in errors.name">{{ message }}</span>
                    </div>
                </div>

                <div class="form-floating flex-grow-1">
                    <input type="email" class="form-control" id="email" :class="{ 'is-invalid': errors.email }"
                        placeholder="name@example.com" v-model="email">
                    <label for="email" class="">Email address</label>
                    <div class="alert alert-danger mt-2" role="alert" v-if="errors.email">
                        <strong>Errors! </strong>
                        <span v-for="message in errors.email">{{ message }}</span>
                    </div>
                </div>

                <div class="form-floating flex-grow-1">
                    <input type="tel" class="form-control" :class="{ 'is-invalid': errors.phone }" id="phone"
                        placeholder="0123456789" v-model="phone">
                    <label for="phone">Phone number</label>
                    <div class="alert alert-danger mt-2" role="alert" v-if="errors.phone">
                        <strong>Errors! </strong>
                        <span v-for="message in errors.phone">{{ message }}</span>
                    </div>
                </div>
            </div>

            <div class="py-5">
                <textarea class="form-control" id="message" rows="5" placeholder="Leave your message here" v-model="message"
                    :class="{ 'is-invalid': errors.message }"></textarea>
                <div class="alert alert-danger mt-2" role="alert" v-if="errors.message">
                    <strong>Errors! </strong>
                    <span v-for="message in errors.message">{{ message }}</span>
                </div>
            </div>

            <button type="submit" class="btn btn-danger" :disabled="loading"> {{ loading ? 'Sending...' : 'Send' }}
            </button>



        </form>

    </div>
</template>


<style lang="scss" scoped>
.bg_contact {
    background-color: rgba(0, 0, 0, 0.446);
    border: 2px solid black;
    margin-top: 230px;
    margin-bottom: 230px;
    box-shadow: 10px 10px 500px #d90404;
    border-radius: 20px;
    margin-bottom: 260px;
    

    & input:hover,
    textarea:hover {
        transform: scale(1.1);
        background-color: rgba(0, 0, 0, 0.681);
    }
}

input,
textarea {
    background-color: rgba(0, 0, 0, 0.681);
    color: red;
    border: 2px solid white;
}
</style>