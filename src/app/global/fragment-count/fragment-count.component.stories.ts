import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { FragmentCountComponent } from './fragment-count.component';
import { GlobalModule } from '../global.module';

export default {
    component: FragmentCountComponent,
    decorators: [
        moduleMetadata({
            declarations: [],
            imports: [CommonModule, GlobalModule],
        }),
    ],
    title: 'Components/Global/FragmentCounter',
} as Meta;

const Template: Story<FragmentCountComponent> = args => ({
    props: {
        ...args
    },
});


export const Default = Template.bind({});

Default.args = {};

Default.parameters = {
    backgrounds: { default: 'chihiros' }
}