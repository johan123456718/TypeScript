import React, { useState } from 'react';

export class Greeter{
    private greeting: String;

    constructor(greeting: String){
        this.greeting = greeting;
    }

    public greet(){
        return "Hello, " + this.greeting;
    }

    public getGreeting(){
        return this.greeting;
    }
}