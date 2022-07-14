import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { contactReducer } from '../contact.reducers';
import { ContactPageComponent} from '../../contact-page/contact-page.component'

describe('ContactPageComponent', () => {
    let component: ContactPageComponent;
    let fixture: ComponentFixture<ContactPageComponent>;
   
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [ ContactPageComponent ],
        imports: [
          StoreModule.forRoot({ count: contactReducer })
        ]
      }).compileComponents();
   
      fixture = TestBed.createComponent(ContactPageComponent);
      component = fixture.debugElement.componentInstance;
      fixture.detectChanges();
    }));

    it('should create the component', () => {
        expect(component).toBeTruthy();
      });
     
    });