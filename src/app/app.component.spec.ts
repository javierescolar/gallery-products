import { Provider } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { CategoryRepository } from './products/domain/repositories/category.repository';
import { InMemoryCategoriesService } from './products/infrastucture/inMemory/in-memory-categories.service';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, CoreModule],
      declarations: [AppComponent],
      providers: [
        {
          provide: CategoryRepository,
          useClass: InMemoryCategoriesService,
        } as Provider,
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should render an app-navbar`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const navbar =
      fixture.debugElement.nativeElement.querySelector('app-navbar');
    expect(navbar).toBeTruthy();
  });
});
