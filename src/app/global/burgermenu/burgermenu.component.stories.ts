import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { BurgermenuComponent } from './burgermenu.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { AngularSvgIconPreloaderModule } from 'angular-svg-icon-preloader';
import { HttpClientModule } from '@angular/common/http';
import { GlobalModule } from '../global.module';

export default {
    component: BurgermenuComponent,
    decorators: [
        moduleMetadata({
            declarations: [],
            imports: [
                CommonModule,
                GlobalModule,
                HttpClientModule,
                AngularSvgIconModule.forRoot(),
                AngularSvgIconPreloaderModule.forRoot({configUrl: "/assets/icons.json"})
            ]
        }),
    ],
    title: 'Components/Global/Burgermenu',
} as Meta;

const Template: Story<BurgermenuComponent> = args => ({
    props: {
        ...args
    },
});

export const Default = Template.bind({});
Default.args = {};
Default.parameters = {
    backgrounds: { default: 'chihiros'}
}
