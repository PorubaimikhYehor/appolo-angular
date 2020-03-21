import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { ApolloQueryResult } from 'apollo-client';

const variable = {};
@Component({
  selector: 'app-exchange-rates',
  templateUrl: './exchange-rates.component.html',
  styleUrls: ['./exchange-rates.component.scss']
})
export class ExchangeRatesComponent implements OnInit {
  rates: any[];
  loading = true;
  errors: any;


  func() { return '' }


  constructor(private apollo: Apollo) { }


  query = gql`
  query getData {
    getData(input: $input)
    @rest(type:"data", path: "plants/getplants", method: "POST") {
      data
    }
  }
  `;


  ngOnInit() {
    this.apollo.watchQuery({
      query: this.query
    }).valueChanges.subscribe(console.log)


    // this.apollo
    //   .watchQuery({
    //     query: gql`
    //       {
    //         rates(currency: "UAH") {
    //           currency
    //           rate
    //           name
    //         }
    //       }
    //     `,
    //   })
    //   .valueChanges.subscribe((result: ApolloQueryResult<{ rates: any }>) => {
    //     console.log(result);

    //     this.rates = result.data && result.data.rates;
    //     this.loading = result.loading;
    //     this.errors = result.errors;
    //   });
  }
}
