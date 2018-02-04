import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers: [
    MovieProvider
  ]
})
export class FeedPage {
  public nomeUsuario:string="Willian Arruda";
  public objeto_feed = {
    titulo:"Willian Arruda",
    data:"Novembro 5, 1955",
    descricao:"Que app incrível não?",
    qntd_likes:12,
    qntd_comments:4,
    time_comment:"11h atrás"
  }

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private movieProvider:MovieProvider) {
  }

  public somaDoisNumeros(num1:number, num2:number):void{
    //função de teste
    alert(num1 + num2);
  }

  public lista_filmes = Array<any>();

  ionViewDidLoad() {
    //this.somaDoisNumeros(10,20);
    this.movieProvider.getLatestMovies().subscribe(
      data=>{
        const response = (data as any);
        const objeto_retorno = JSON.parse(response._body);
        this.lista_filmes= objeto_retorno.results;
        console.log(objeto_retorno);
      }, error => {
        console.log(error);
      }
    )
  }

}
