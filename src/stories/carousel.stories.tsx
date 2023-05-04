import type { StoryObj } from "@storybook/react";
import { Carousel } from "../components/Carousel"

const meta = {
  title: "Molecules/Carousel",
  component: Carousel,
  tags: ["docsPage"]
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    carouselItems: []
  }
}

Default.args = {
  carouselItems: [
      {
          id: 1,
          width: 1536,
          height: 864,
          src: 'https://www.epfl.ch/campus/services/website/wp-content/uploads/2020/10/HD-Soleil-Le-Mont-1920x1080-3374-1536x864.jpg',
          srcset: 'https://www.epfl.ch/campus/services/website/wp-content/uploads/2020/10/HD-Soleil-Le-Mont-1920x1080-3374-1536x864.jpg 1536w, https://www.epfl.ch/campus/services/website/wp-content/uploads/2020/10/HD-Soleil-Le-Mont-1920x1080-3374-300x169.jpg 300w, https://www.epfl.ch/campus/services/website/wp-content/uploads/2020/10/HD-Soleil-Le-Mont-1920x1080-3374-1024x576.jpg 1024w, https://www.epfl.ch/campus/services/website/wp-content/uploads/2020/10/HD-Soleil-Le-Mont-1920x1080-3374-768x432.jpg 768w, https://www.epfl.ch/campus/services/website/wp-content/uploads/2020/10/HD-Soleil-Le-Mont-1920x1080-3374-384x216.jpg 384w, https://www.epfl.ch/campus/services/website/wp-content/uploads/2020/10/HD-Soleil-Le-Mont-1920x1080-3374-1152x648.jpg 1152w, https://www.epfl.ch/campus/services/website/wp-content/uploads/2020/10/HD-Soleil-Le-Mont-1920x1080-3374.jpg 1920w',
          title: 'ENAC School',
          link: 'https://www.epfl.ch/schools/enac/',
          content: 'School of Architecture, Civil and Environmental Engineering.'
      },
      {
          id: 2,
          width: 1536,
          height: 864,
          src: 'https://www.epfl.ch/campus/services/website/wp-content/uploads/2020/10/HD-Soleil-Mont-Tendre-1920x1080-3209-1536x864.jpg',
          srcset: 'https://www.epfl.ch/campus/services/website/wp-content/uploads/2020/10/HD-Soleil-Mont-Tendre-1920x1080-3209-1536x864.jpg 1536w, https://www.epfl.ch/campus/services/website/wp-content/uploads/2020/10/HD-Soleil-Mont-Tendre-1920x1080-3209-300x169.jpg 300w, https://www.epfl.ch/campus/services/website/wp-content/uploads/2020/10/HD-Soleil-Mont-Tendre-1920x1080-3209-1024x576.jpg 1024w, https://www.epfl.ch/campus/services/website/wp-content/uploads/2020/10/HD-Soleil-Mont-Tendre-1920x1080-3209-768x432.jpg 768w, https://www.epfl.ch/campus/services/website/wp-content/uploads/2020/10/HD-Soleil-Mont-Tendre-1920x1080-3209-384x216.jpg 384w, https://www.epfl.ch/campus/services/website/wp-content/uploads/2020/10/HD-Soleil-Mont-Tendre-1920x1080-3209-1152x648.jpg 1152w, https://www.epfl.ch/campus/services/website/wp-content/uploads/2020/10/HD-Soleil-Mont-Tendre-1920x1080-3209.jpg 1920w',
          title: 'SV School',
          link: 'https://www.epfl.ch/schools/sv/',
          content: 'School of Life Sciences'
      },
      {
          id: 3,
          width: 1536,
          height: 864,
          src: 'https://www.epfl.ch/campus/services/website/wp-content/uploads/2020/10/HD-Mont-Tendre-3209-1536x864.jpg',
          srcset: 'https://www.epfl.ch/campus/services/website/wp-content/uploads/2020/10/HD-Mont-Tendre-3209-1536x864.jpg 1536w, https://www.epfl.ch/campus/services/website/wp-content/uploads/2020/10/HD-Mont-Tendre-3209-300x169.jpg 300w, https://www.epfl.ch/campus/services/website/wp-content/uploads/2020/10/HD-Mont-Tendre-3209-1024x576.jpg 1024w, https://www.epfl.ch/campus/services/website/wp-content/uploads/2020/10/HD-Mont-Tendre-3209-768x432.jpg 768w, https://www.epfl.ch/campus/services/website/wp-content/uploads/2020/10/HD-Mont-Tendre-3209-384x216.jpg 384w, https://www.epfl.ch/campus/services/website/wp-content/uploads/2020/10/HD-Mont-Tendre-3209-1152x648.jpg 1152w, https://www.epfl.ch/campus/services/website/wp-content/uploads/2020/10/HD-Mont-Tendre-3209.jpg 1920w',
          title: 'SB School',
          link: 'https://www.epfl.ch/schools/sb/',
          content: 'School of Basic Sciences'
      },
      {
          id: 4,
          active: true,
          width: 1536,
          height: 864,
          src: 'https://www.epfl.ch/campus/services/website/wp-content/uploads/2020/10/HD-Mont-Tendre-3209-1536x864.jpg',
          srcset: 'https://www.epfl.ch/campus/services/website/wp-content/uploads/2020/10/HD-Mont-Tendre-3209-1536x864.jpg 1536w, https://www.epfl.ch/campus/services/website/wp-content/uploads/2020/10/HD-Mont-Tendre-3209-300x169.jpg 300w, https://www.epfl.ch/campus/services/website/wp-content/uploads/2020/10/HD-Mont-Tendre-3209-1024x576.jpg 1024w, https://www.epfl.ch/campus/services/website/wp-content/uploads/2020/10/HD-Mont-Tendre-3209-768x432.jpg 768w, https://www.epfl.ch/campus/services/website/wp-content/uploads/2020/10/HD-Mont-Tendre-3209-384x216.jpg 384w, https://www.epfl.ch/campus/services/website/wp-content/uploads/2020/10/HD-Mont-Tendre-3209-1152x648.jpg 1152w, https://www.epfl.ch/campus/services/website/wp-content/uploads/2020/10/HD-Mont-Tendre-3209.jpg 1920w',
          title: 'STI School',
          link: 'https://sti.epfl.ch',
          content: 'School of Engineering'
      }
  ]
}

