import {Injectable} from '@angular/core'

export class Alert {

    message:string
    type:string
}

@Injectable()
export class MessageService {
    
    public messages:Alert[] = []

}