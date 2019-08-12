import {Component} from '@angular/core';
import {MessageService} from '../../../components/common/messageservice';

@Component({
    templateUrl: './tabviewdemo.html',
    providers: [MessageService]
})
export class TabViewDemo {
    poc = {
        detailsError: Math.random() > 0.5,
        addressError: Math.random() > 0.5,
        contactError: Math.random() > 0.5,
    };
    
    constructor(private messageService: MessageService) {}
    
    onTabChange(event) {
        this.messageService.add({severity:'info', summary:'Tab Expanded', detail: 'Index: ' + event.index});
    }
}
