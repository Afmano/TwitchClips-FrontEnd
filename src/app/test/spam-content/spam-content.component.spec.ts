import { type ComponentFixture, TestBed } from "@angular/core/testing";

import { SpamContentComponent } from "./spam-content.component";

describe("SpamContentComponent", () => {
	let component: SpamContentComponent;
	let fixture: ComponentFixture<SpamContentComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [SpamContentComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(SpamContentComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
