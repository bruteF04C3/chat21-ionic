
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

// models
import { ImageRepoService } from './image-repo.service';
import { ConversationModel } from './../../models/conversation';
// import { ImageRepoService } from './image-repo.service';

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export abstract class ConversationsHandlerService {

  // BehaviorSubject
  abstract BSConversationDetail: BehaviorSubject<ConversationModel> = new BehaviorSubject<ConversationModel>(null);
  abstract conversationAdded: BehaviorSubject<ConversationModel> = new BehaviorSubject<ConversationModel>(null);
  abstract conversationChanged: BehaviorSubject<ConversationModel> = new BehaviorSubject<ConversationModel>(null);
  abstract conversationChangedDetailed: BehaviorSubject<{value: ConversationModel, previousValue: ConversationModel}> = new BehaviorSubject<{value: ConversationModel, previousValue: ConversationModel}>(null);
  abstract conversationRemoved: BehaviorSubject<ConversationModel> = new BehaviorSubject<ConversationModel>(null);
  // abstract readAllMessages: BehaviorSubject<string> = new BehaviorSubject<string>(null);
 
  // params
  abstract conversations: Array<ConversationModel> = [];
  abstract uidConvSelected: string;

  // functions
  abstract initialize(tenant: string, userId: string, translationMap: Map<string, string>): void;
  // abstract connect(): void;
  abstract subscribeToConversations(lastConversatioTimestamp: number, callback: any): void;
  abstract countIsNew(): number;
  abstract setConversationRead(conversationId: string): void;
  abstract dispose(): void;
  abstract archiveConversation(conversationId: string): void;
  abstract getLastConversation(callback:(conv: ConversationModel, error: string)=>void): void
  abstract getConversationDetail(conversationId: string, callback:(conv: ConversationModel)=>void): void;
  abstract getClosingConversation(conversationId: string): boolean;
  abstract setClosingConversation(conversationId: string, status: boolean): void;
  abstract deleteClosingConversation(conversationId: string): void;

}
