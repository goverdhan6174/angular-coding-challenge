import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { LandingScreenComponent } from './landing-screen.component';
import { GlobalModule } from '../global/global.module';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { AngularSvgIconPreloaderModule } from 'angular-svg-icon-preloader';
import { RouterTestingModule } from '@angular/router/testing';


export default {
    component: LandingScreenComponent,
    decorators: [
        moduleMetadata({
            declarations: [LandingScreenComponent],
            imports: [CommonModule, GlobalModule,             
                AngularSvgIconModule.forRoot(),
                AngularSvgIconPreloaderModule.forRoot({configUrl: "/assets/icons.json"}),
                RouterTestingModule],
        }),
    ],
    title: 'Pages/LandingScreen',
} as Meta;

const Template: Story<LandingScreenComponent> = args => ({
    props: {
        ...args
    },
});



export const Default = Template.bind({});
Default.args = {
   
};



