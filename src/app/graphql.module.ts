import { NgModule } from '@angular/core';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Apollo, ApolloModule } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';


@NgModule({
  exports: [ApolloModule, HttpLinkModule],
  providers: [
  ], 
})
export class GraphQLModule { 


  private readonly URI1: string = 'http://historyservice-saga-pattern.10.100.103.15.xip.io/graphql';
  private readonly URI2: string = 'http://orderservice-saga-pattern.10.100.103.15.xip.io/graphql';

  constructor(
    apollo: Apollo,
    httpLink: HttpLink
  ) {
    const options1: any = { uri: this.URI1 };
    apollo.createDefault({
      link: httpLink.create(options1),
      cache: new InMemoryCache()
    });

    const options2: any = { uri: this.URI2 };
    apollo.createNamed('endpoint2', {
      link: httpLink.create(options2),
      cache: new InMemoryCache()
    });

    const options3: any = { uri: this.URI1 };
    apollo.createNamed('endpoint3', {
      link: httpLink.create(options3),
      cache: new InMemoryCache()
    });
  }

}
