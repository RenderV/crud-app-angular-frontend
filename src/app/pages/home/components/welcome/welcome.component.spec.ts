import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WelcomeComponent } from './welcome.component';

describe('WelcomeComponent', () => {
  let component: WelcomeComponent;
  let fixture: ComponentFixture<WelcomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WelcomeComponent]
    });
    fixture = TestBed.createComponent(WelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a user count', () => {
    expect(component.userCount).toBe(4);
  });

  it('should have correct user count by role', () => {
    const userCountByRole = component.getUserCountByRole();
    expect(userCountByRole['Engenheiro de FE']).toBe(1);
    expect(userCountByRole['Engenheiro de BE']).toBe(1);
    expect(userCountByRole['Analista de Dados']).toBe(1);
    expect(userCountByRole['Líder Técnico']).toBe(1);
  });

  it('should have correct user details', () => {
    const user = component.users[0];
    expect(user.name).toBe('João');
    expect(user.email).toBe('joão@gmail.com');
    expect(user.role).toBe('Engenheiro de FE');
  });
});
