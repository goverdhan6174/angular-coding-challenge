import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconPreloaderModule } from 'angular-svg-icon-preloader';
import { RouterTestingModule } from '@angular/router/testing';
import { GlobalModule } from '../global.module';


export default {
    component: NavbarComponent,
    decorators: [
        moduleMetadata({
            declarations: [],
            imports: [CommonModule,
                GlobalModule,
                HttpClientModule,             
                AngularSvgIconModule.forRoot(),
                AngularSvgIconPreloaderModule.forRoot({configUrl: "/assets/icons.json"}),
                RouterTestingModule
            ],
        }),
    ],
    title: 'Components/Global/Navbar',
} as Meta;

const Template: Story<NavbarComponent> = args => ({
    props: {
        ...args,
    },
});


export const home = Template.bind({});
home.args = {
    currentPage: "landing"
};


export const workshop = Template.bind({});
workshop.args = {
    currentPage: "workshop"
};


export const dummy1 = Template.bind({});
dummy1.args = {
    currentPage: "dummy1"
};


export const dummy2 = Template.bind({});
dummy2.args = {
    currentPage: "dummy2"
};

