// import { NextResponse } from 'next/server';
// import connectDB from '@/lib/db';
// import Project from '@/models/Project';
// import mongoose from 'mongoose';

// export async function GET(request, { params }) {
//   try {
//     await connectDB();
//     const { id } = params;
//     const project = await Project.findOne(
//       { 'reviews._id': new mongoose.Types.ObjectId(id) },
//       { 'reviews.$': 1 }
//     );
//     if (!project || !project.reviews.length) {
//       return NextResponse.json({ error: 'Review not found' }, { status: 404 });
//     }
//     return NextResponse.json(project.reviews[0]);
//   } catch (error) {
//     return NextResponse.json({ error: 'Server error' }, { status: 500 });
//   }
// }

// export async function PUT(request, { params }) {
//   try {
//     await connectDB();
//     const { id } = params;
//     const body = await request.json();

//     const updateFields = {};
//     if (body.reviewerName !== undefined) updateFields['reviews.$.reviewerName'] = body.reviewerName;
//     if (body.reviewerProfile !== undefined) updateFields['reviews.$.reviewerProfile'] = body.reviewerProfile;
//     if (body.rating !== undefined) updateFields['reviews.$.rating'] = body.rating;
//     if (body.title !== undefined) updateFields['reviews.$.title'] = body.title;
//     if (body.description !== undefined) updateFields['reviews.$.description'] = body.description;
//     if (body.adminReply !== undefined) updateFields['reviews.$.adminReply'] = body.adminReply;
//     if (body.likesCount !== undefined) updateFields['reviews.$.likesCount'] = body.likesCount;
//     // Note: createdAt is not updatable

//     if (Object.keys(updateFields).length === 0) {
//       return NextResponse.json({ error: 'No fields to update' }, { status: 400 });
//     }

//     const project = await Project.findOneAndUpdate(
//       { 'reviews._id': new mongoose.Types.ObjectId(id) },
//       { $set: updateFields },
//       { new: true }
//     );

//     if (!project) {
//       return NextResponse.json({ error: 'Review not found' }, { status: 404 });
//     }

//     const updatedReview = project.reviews.find((review) => review._id.toString() === id);
//     return NextResponse.json(updatedReview);
//   } catch (error) {
//     return NextResponse.json({ error: 'Server error' }, { status: 500 });
//   }
// }

// export async function DELETE(request, { params }) {
//   try {
//     await connectDB();
//     const { id } = params;
//     const project = await Project.findOneAndUpdate(
//       { 'reviews._id': new mongoose.Types.ObjectId(id) },
//       { $pull: { reviews: { _id: new mongoose.Types.ObjectId(id) } } },
//       { new: true }
//     );
//     if (!project) {
//       return NextResponse.json({ error: 'Review not found' }, { status: 404 });
//     }
//     return NextResponse.json({ message: 'Review deleted successfully' });
//   } catch (error) {
//     return NextResponse.json({ error: 'Server error' }, { status: 500 });
//   }
// }














// import { NextResponse } from 'next/server';
// import connectDB from '@/lib/db';
// import Project from '@/models/Project';
// import mongoose from 'mongoose';

// export async function GET(request, { params }) {
//   try {
//     await connectDB();
//     const { id } = params;
//     if (!mongoose.Types.ObjectId.isValid(id)) {
//       return NextResponse.json({ error: 'Invalid review ID' }, { status: 400 });
//     }
//     const project = await Project.findOne(
//       { 'reviews._id': new mongoose.Types.ObjectId(id) },
//       { 'reviews.$': 1 }
//     );
//     if (!project || !project.reviews.length) {
//       return NextResponse.json({ error: 'Review not found' }, { status: 404 });
//     }
//     return NextResponse.json(project.reviews[0]);
//   } catch (error) {
//     console.error('GET error:', error);
//     return NextResponse.json({ error: 'Server error' }, { status: 500 });
//   }
// }

// export async function PUT(request, { params }) {
//   try {
//     await connectDB();
//     const { id } = params;
//     if (!mongoose.Types.ObjectId.isValid(id)) {
//       return NextResponse.json({ error: 'Invalid review ID' }, { status: 400 });
//     }
//     const body = await request.json();

//     const updateFields = {};
//     if (body.reviewerName !== undefined) updateFields['reviews.$.reviewerName'] = body.reviewerName;
//     if (body.reviewerProfile !== undefined) updateFields['reviews.$.reviewerProfile'] = body.reviewerProfile;
//     if (body.rating !== undefined) updateFields['reviews.$.rating'] = body.rating;
//     if (body.title !== undefined) updateFields['reviews.$.title'] = body.title;
//     if (body.description !== undefined) updateFields['reviews.$.description'] = body.description;
//     if (body.adminReply !== undefined) updateFields['reviews.$.adminReply'] = body.adminReply;
//     if (body.likesCount !== undefined) updateFields['reviews.$.likesCount'] = body.likesCount;

//     if (Object.keys(updateFields).length === 0) {
//       return NextResponse.json({ error: 'No fields to update' }, { status: 400 });
//     }

//     const project = await Project.findOneAndUpdate(
//       { 'reviews._id': new mongoose.Types.ObjectId(id) },
//       { $set: updateFields },
//       { new: true }
//     );

//     if (!project) {
//       return NextResponse.json({ error: 'Review not found' }, { status: 404 });
//     }

//     const updatedReview = project.reviews.find((review) => review._id.toString() === id);
//     return NextResponse.json(updatedReview);
//   } catch (error) {
//     console.error('PUT error:', error);
//     return NextResponse.json({ error: 'Server error' }, { status: 500 });
//   }
// }

// export async function DELETE(request, { params }) {
//   try {
//     await connectDB();
//     const { id } = params;
//     if (!mongoose.Types.ObjectId.isValid(id)) {
//       return NextResponse.json({ error: 'Invalid review ID' }, { status: 400 });
//     }
//     const project = await Project.findOneAndUpdate(
//       { 'reviews._id': new mongoose.Types.ObjectId(id) },
//       { $pull: { reviews: { _id: new mongoose.Types.ObjectId(id) } } },
//       { new: true }
//     );
//     if (!project) {
//       return NextResponse.json({ error: 'Review not found' }, { status: 404 });
//     }
//     return NextResponse.json({ message: 'Review deleted successfully' });
//   } catch (error) {
//     console.error('DELETE error:', error);
//     return NextResponse.json({ error: 'Server error' }, { status: 500 });
//   }
// }




















import { NextResponse } from 'next/server';
import connectDB from '../../../../../../lib/dbConnect';
import Project from '../../../../../../lib/model/Projects';
import mongoose from 'mongoose';

export async function GET(request, { params }) {
  try {
    await connectDB();
    const { id } = params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json({ error: 'Invalid review ID' }, { status: 400 });
    }
    const project = await Project.findOne(
      { 'reviews._id': new mongoose.Types.ObjectId(id) },
      { 'reviews.$': 1 }
    );
    if (!project || !project.reviews.length) {
      return NextResponse.json({ error: 'Review not found' }, { status: 404 });
    }
    return NextResponse.json(project.reviews[0]);
  } catch (error) {
    console.error('GET error:', error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}

export async function PUT(request, { params }) {
  try {
    await connectDB();
    const { id } = params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json({ error: 'Invalid review ID' }, { status: 400 });
    }
    const body = await request.json();

    const updateFields = {};
    if (body.reviewerName !== undefined) updateFields['reviews.$.reviewerName'] = body.reviewerName;
    if (body.reviewerProfile !== undefined) updateFields['reviews.$.reviewerProfile'] = body.reviewerProfile;
    if (body.rating !== undefined) updateFields['reviews.$.rating'] = body.rating;
    if (body.title !== undefined) updateFields['reviews.$.title'] = body.title;
    if (body.description !== undefined) updateFields['reviews.$.description'] = body.description;
    if (body.adminReply !== undefined) updateFields['reviews.$.adminReply'] = body.adminReply;
    if (body.likesCount !== undefined) updateFields['reviews.$.likesCount'] = body.likesCount;

    if (Object.keys(updateFields).length === 0) {
      return NextResponse.json({ error: 'No fields to update' }, { status: 400 });
    }

    const project = await Project.findOneAndUpdate(
      { 'reviews._id': new mongoose.Types.ObjectId(id) },
      { $set: updateFields },
      { new: true }
    );

    if (!project) {
      return NextResponse.json({ error: 'Review not found' }, { status: 404 });
    }

    const updatedReview = project.reviews.find((review) => review._id.toString() === id);
    return NextResponse.json(updatedReview);
  } catch (error) {
    console.error('PUT error:', error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  try {
    await connectDB();
    const { id } = params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json({ error: 'Invalid review ID' }, { status: 400 });
    }
    const project = await Project.findOneAndUpdate(
      { 'reviews._id': new mongoose.Types.ObjectId(id) },
      { $pull: { reviews: { _id: new mongoose.Types.ObjectId(id) } } },
      { new: true }
    );
    if (!project) {
      return NextResponse.json({ error: 'Review not found' }, { status: 404 });
    }
    return NextResponse.json({ message: 'Review deleted successfully' });
  } catch (error) {
    console.error('DELETE error:', error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}