import { Component, OnInit } from '@angular/core';
import axios from 'axios';

type JokeResponse = {
  value:string;
}

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent implements OnInit {

  joke: string = "";
  fetchingJoke: boolean = false;

  constructor() {
    // this.fetchingJoke = true; 
    // this.joke = "loading joke ..."
    this.fetchJoke();
  }

  getJoke():string {
    return this.joke;
  }

  setJoke(joke: string) {
    this.joke = joke;
  }

  async fetchJoke(){
    this.fetchingJoke = true;
    this.setJoke("fetching joke ...")
    const response = await axios.get<JokeResponse>("https://api.chucknorris.io/jokes/random")
    // await new Promise(r => setTimeout(r, 2000));
    this.setJoke(response.data.value);
    this.fetchingJoke = false;
  }

  ngOnInit(): void {
  }

}
