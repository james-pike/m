import { component$ } from '@builder.io/qwik';
import { Headline } from '../ui/Headline';
import { PageWrapper } from '../common/PageWrapper';
import { Tabs } from '../ui/Tabs';
import { Card } from '../ui/Card';

export default component$(() => {
  return (
    <div>
    <PageWrapper>
      <Headline
        title={"Flexible Pricing Options"}
        subtitle={"Choose a one-time payment or pay it off over a longer period"}
        highlight={"Pricing"}
      />
      {/* Page content goes here */}
    </PageWrapper>

<section class="bg-white dark:bg-gray-900">
<div class="py-3 px-2 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
 
 
<Tabs.Root class="flex flex-col items-center">
<Tabs.List class="grid w-full max-w-[400px] grid-cols-2">
  <Tabs.Tab>Custom Site - $5000</Tabs.Tab>
  <Tabs.Tab>Monthly Plan - $250</Tabs.Tab>
</Tabs.List>
<Tabs.Panel>
  <Card.Root>
    <Card.Header>
      <Card.Title class="text-primary">Complete Project - $5000 + hosting</Card.Title>
      <Card.Description>
        A one-time payment covering all services for your custom website: design, development, security, and initial setup.
      </Card.Description>
    </Card.Header>
    <Card.Content class="space-y-2">
      <ul class="list-disc list-inside space-y-1 text-sm">
        <li>Custom design and development</li>
        <li>Responsive and accessible layout</li>
        <li>SEO optimization</li>
        <li>Initial hosting setup</li>
      </ul>
    </Card.Content>
    <Card.Footer>
      <button class="btn w-full p-2 bg-primary text-white hover:bg-primary-dark">
        Get Started
      </button>
    </Card.Footer>
  </Card.Root>
</Tabs.Panel>
<Tabs.Panel>
  <Card.Root>
    <Card.Header>
      <Card.Title class="text-primary">Monthly Plan - $250/month</Card.Title>
      <Card.Description>
        A recurring plan that ensures your website is up-to-date and secure: hosting, maintenance, and ongoing support.
      </Card.Description>
    </Card.Header>
    <Card.Content class="space-y-2">
      <ul class="list-disc list-inside space-y-1 text-sm">
        <li>Premium hosting services</li>
        <li>Regular updates and backups</li>
        <li>24/7 security monitoring</li>
        <li>Priority customer support</li>
      </ul>
    </Card.Content>
    <Card.Footer>
      <button class="btn w-full p-2 bg-secondary text-white hover:bg-secondary-dark">
        Subscribe Now
      </button>
    </Card.Footer>
  </Card.Root>
</Tabs.Panel>
</Tabs.Root>
</div>
</section>
</div>
  );
});










